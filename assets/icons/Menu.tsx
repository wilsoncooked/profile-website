export default function Menu({ menuOpen }: { menuOpen: boolean }) {
  return (
    <div
      className={`w-12 h-12 rounded-full border ${
        menuOpen ? 'border-champaign duration-300' : 'border-rust duration-300'
      } border-rust flex flex-col justify-center items-center p-2`}
    >
      <div
        className={`border-b  w-full origin-center ${
          menuOpen
            ? 'border-champaign transform rotate-45 duration-300'
            : 'border-rust  my-1.5 duration-300'
        }`}
      />
      <div
        className={`border-b w-full origin-center ${
          menuOpen
            ? 'border-champaign transform -rotate-45 duration-300'
            : 'border-rust  my-1.5 duration-300'
        }`}
      />
    </div>
  )
}
