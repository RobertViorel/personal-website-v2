"use client";

import React, { useRef, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/animation";
import { useRouter } from 'next/navigation';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setForm({
      name: "",
      email: "",
      message: "",
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_stqjkzp",
        "template_gz4rh78",
        {
          from_name: form.name,
          to_name: "Robert",
          from_email: form.email,
          to_email: "robert@dumitrurobert.com",
          message: form.message,
        },
        "CTps87lqXto1OQu0y"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="m-4 sm:m-12 flex flex-col gap-8 sm:gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="relative bg-[#039cad45] p-6 sm:p-8 rounded-2xl"
      >
        <h3 className="text-xl sm:text-2xl text-primary font-semibold">Contact</h3>

        <button
          type="button"
          className="absolute top-2 right-2 bg-primary py-2 px-4 sm:py-2 sm:px-6 rounded-xl outline-none text-primary font-semibold shadow-lg shadow-primary"
          onClick={() => router.push('/calculator')}
        >
          Website Cost Estimator
        </button>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8"
        >
          <label className="flex flex-col">
            <span className="text-primary font-medium mb-2 sm:mb-4">Your Name *</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-3 px-4 sm:py-4 sm:px-6 bg-[#039cad45] placeholder:text-secondary text-primary rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-primary font-medium mb-2 sm:mb-4">Your Email *</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="py-3 px-4 sm:py-4 sm:px-6 bg-[#039cad45] placeholder:text-secondary text-primary rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-primary font-medium mb-2 sm:mb-4">Your Message *</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="py-3 px-4 sm:py-4 sm:px-6 bg-[#039cad45] placeholder:text-secondary text-primary rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-primary py-2 px-6 sm:py-3 sm:px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-lg shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
