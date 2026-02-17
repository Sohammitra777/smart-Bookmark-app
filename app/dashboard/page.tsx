import { cookies } from "next/headers";

export default async function Dashboard() {
    const session = (await cookies()).get("session");

    if (!session) {
        return <div>You are not logged in</div>;
    }

    const user = JSON.parse(session.value);

    return (
        <main className="flex h-screen items-center justify-center">
            <div>
                <h1 className="text-2xl">Welcome {user.name} 👋</h1>
                <p>{user.email}</p>
                <img
                    src={user.picture}
                    alt="profile"
                    className="mt-4 h-16 w-16 rounded-full"
                />
            </div>
        </main>
    );
}
