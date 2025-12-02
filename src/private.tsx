import { useEffect, useState } from "react";
import { useAuthContext } from "react-oauth2-code-pkce";
import { config } from "./config";
import { formatRelative, parseISO } from "date-fns";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
}

const Private = () => {
  const { logIn, token } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${config.remoteBaseUrl}/api/v3/user`, {
          headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          logIn();
          return;
        }

        if (!response.ok) {
          const body = await response.json();
          setError(`${config.remoteBaseUrl} returned HTTP ${response.statusText}: ${body}`);
        }

        setUser((await response.json()) as User);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <main className="container my-4">
      <h1>OAuth2 Test App</h1>
      {isLoading && <p>Loading user...</p>}
      {error && <p className="text-danger">Error: {error}</p>}
      {!isLoading && !error && (
        <section>
          {user === null ? (
            <p className="text-muted">No user data available.</p>
          ) : (
            <>
              <p>Hey {user.first_name} {user.last_name} 👋</p>
              <p>I can tell all sorts of things about you with the <code>user:read</code> scope. Like, your email address is <a href={`mailto:${user.email}`}>{user.email}</a>, you signed up to <a href={`${config.remoteBaseUrl}`}>{config.remoteBaseUrl}</a> {formatRelative(parseISO(user.created_at), new Date())}.</p>
            </>
          )}
        </section>
      )}
    </main>
  );
};

export default Private;
