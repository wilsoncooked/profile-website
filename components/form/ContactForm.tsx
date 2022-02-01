import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  message?: string
}

export function ContactForm() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit} className="">
      <div className="my-6">
        <label className="hidden">Name</label>
        <input
          className="border-b-2  bg-champaign w-full placeholder-black   tracking-wider text-xl px-2 pb-1 pt-3 outline-none"
          placeholder="NAME"
          required
          {...register('name')}
        />
      </div>
      <div className="my-6">
        <label className="hidden">Email</label>
        <input
          className="border-b-2 bg-champaign w-full placeholder-black  tracking-wider text-xl px-2 pb-1 pt-3 outline-none"
          placeholder="EMAIL"
          type="email"
          required
          {...register('email')}
        />
      </div>
      <div className="my-6">
        <label className="hidden">Message</label>
        <textarea
          className="border-2 bg-champaign w-full placeholder-black  tracking-wider text-xl px-2 pb-1 pt-3 outline-none"
          placeholder="MESSAGE"
          rows={4}
          {...register('message')}
        />
      </div>
      <button
        type="submit"
        className="tracking-wider text-xl  border-2  px-4 pb-2 pt-3 uppercase"
      >
        Let&apos;s chat
      </button>
    </form>
  )
}
