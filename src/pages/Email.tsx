import { useRef } from "react";
import EmailJs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const useRef1 = useRef<HTMLInputElement | null>(null);
  const useRef2 = useRef<HTMLInputElement | null>(null);
  const useRef3 = useRef<HTMLInputElement | null>(null);
  const useRef4 = useRef<HTMLInputElement | null>(null);
  const useRef5 = useRef<HTMLInputElement | null>(null);
  const useRef6 = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    EmailJs.sendForm(
      "service_vhfxo88",
      "template_w3g1srl",
      e.target,
      "SxKVMTKVEpiQa0iV0"
    );

    if (useRef1.current) {
      useRef1.current.value = "";
    }
    if (useRef2.current) {
      useRef2.current.value = "";
    }
    if (useRef3.current) {
      useRef3.current.value = "";
    }
    if (useRef4.current) {
      useRef4.current.value = "";
    }
    if (useRef5.current) {
      useRef5.current.value = "";
    }
    if (useRef6.current) {
      useRef6.current.value = "";
    }
  };

  return (
    <div className="max-w-md">
      <form className="w-80" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 ">
            <input
              type="text"
              id="name"
              name="name"
              ref={useRef1}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="First Name"
              required
            />
          </div>

          <div className="mb-2">
            <input
              type="text"
              id="surname"
              name="surname"
              ref={useRef2}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="mb-2">
          <input
            type="tel"
            id="phone"
            name="phone"
            ref={useRef3}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Phone"
            required
          />
        </div>

        <div className="mb-2">
          <input
            type="email"
            id="email"
            name="email"
            ref={useRef4}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            id="address"
            name="address"
            ref={useRef5}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Full Address"
            required
          />
        </div>

        <div className="mb-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            ref={useRef6}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Message your order"
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            value="send"
            className="bg-blue-500 text-white p-1 rounded hover:bg-blue-700 w-24 transition duration-200"
          >
            SEND
          </button>

          <div className="cursor-pointer">
            <img className="w-7" src="/images/facebook.png" alt="" />
          </div>
          <div className="cursor-pointer">
            <img className="w-7" src="/images/twitter.png" alt="" />
          </div>
          <div className="cursor-pointer">
            <img className="w-7" src="/images/google.png" alt="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
