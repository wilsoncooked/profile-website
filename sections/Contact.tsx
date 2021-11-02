import { ContactForm } from '../components'

export default function Contact() {
  return (
    <div id="contact" className="flex items-center justify-center pl-16 pr-32">
      <div className="grid grid-cols-2 gap-8 w-full">
        <div>
          <h2 className="text-7xl font-serif font-bold text-rust tracking-wider	my-4">
            Get in touch
          </h2>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
