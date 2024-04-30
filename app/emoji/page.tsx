"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as z from "zod";

// ZOD VALIDATION SCHEMA -----------------------------------------------------------
// ZOD VALIDATION SCHEMA -----------------------------------------------------------
// ZOD VALIDATION SCHEMA -----------------------------------------------------------
const emojiRegex = /\p{Emoji}/u;
const formSchema = z.object({
  emoji: z.string().refine(value => emojiRegex.test(value), {
    message: "Only emojis are allowed",
  }),
});

// EMOJI PAGE ---------------------------------------------------------------------
// EMOJI PAGE ---------------------------------------------------------------------
// EMOJI PAGE ---------------------------------------------------------------------
const Emoji = () => {
  // FORM HOOKS
  const { handleSubmit, register } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emoji: "",
    },
  });

  // SUBMIT FUNCTION
  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/emoji", value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input max={1} maxLength={1} className='border-2 border-black' type='text' {...register("emoji")} />
      <button className='border-2 bg-orange-600' type='submit'>
        Submit emoji
      </button>
    </form>
  );
};

export default Emoji;

// USERS EXAMPLE

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
