import prisma from "@/prisma/client";
import { User } from "@prisma/client";

type Props = {
  users: User[];
};

export default function Home({ users }: Props) {
  return (
    <div>
      <h2>hej</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.email}</h1>
          <p>{user.password}</p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  return { props: { users } };
}
