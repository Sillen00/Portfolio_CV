"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as z from "zod";

type Props = {
  users: User[];
};

const emojiRegex = /\p{Emoji}/u;
const formSchema = z.object({
  emoji: z.string().refine(value => emojiRegex.test(value), {
    message: "Only emojis are allowed",
  }),
});

export default function Home({ users }: Props) {
  const { handleSubmit, register } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emoji: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/emoji", value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>hej</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input max={1} maxLength={1} className='border-2 border-black' type='text' {...register("emoji")} />
        <button className='border-2 bg-orange-600' type='submit'>
          Submit emoji
        </button>
      </form>
    </div>
  );
}

{
  /* {users.map((user) => (
  <div key={user.id}>
    <h1>{user.email}</h1>
    <p>{user.password}</p>
  </div>
))} */
}
// export async function getServerSideProps() {
//   const users = await prisma.user.findMany();
//   return { props: { users } };
// }
