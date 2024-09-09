"use client";

import React, { useRef, useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/animation";

interface FormData {
  pages: number;
  designFiles: boolean;
  backendComplexity: "none" | "simple" | "medium" | "complex";
  userAuthentication: boolean;
  provideContent: boolean;
  cmsRequired: boolean;
  seoOptimization: boolean;
  specialFeatures: boolean;
}

export function WebsiteEstimator() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    pages: 1,
    designFiles: false,
    backendComplexity: "none",
    userAuthentication: false,
    provideContent: true,
    cmsRequired: false,
    seoOptimization: false,
    specialFeatures: false,
  });

  const [estimate, setEstimate] = useState<number | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [name]: target.checked,
      }));
    } else {

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const calculateEstimate = () => {
    let price = 400; // Base price
    price += (formData.pages - 1) * 150;


    if (!formData.designFiles) price += 200;


    if (formData.backendComplexity === "simple") price += 500;
    if (formData.backendComplexity === "medium") price += 700;
    if (formData.backendComplexity === "complex") price += 1000;


    if (formData.userAuthentication) price += 400;


    if (!formData.provideContent) price += 300;


    if (formData.cmsRequired) price += 600;


    if (formData.seoOptimization) price += 300;


    if (formData.specialFeatures) price += 300;

    setEstimate(price);
  };

  return (
    <div className="mt-12 flex flex-col gap-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-[#039cad45] p-8 rounded-2xl shadow-lg"
      >
        <h3 className="text-2xl text-primary font-semibold mb-6">
          Website Cost Estimator
        </h3>

        <form
          ref={formRef}
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-6"
        >

          <label className="flex flex-col text-gray-400">
            <span className="text-primary font-medium mb-2">Number of Pages *</span>
            <input
              type="number"
              name="pages"
              value={formData.pages}
              min="1"
              onChange={handleInputChange}
              className="py-4 px-6 bg-[#039cad45] rounded-lg"
              required
            />
          </label>

          <label className="flex items-center space-x-2 text-gray-400">
            <input
              type="checkbox"
              name="designFiles"
              checked={formData.designFiles}
              onChange={handleInputChange}
              className="h-5 w-5 rounded"
            />
            <span>Do you have any design files?</span>
          </label>


          <label className="flex flex-col text-gray-400">
            <span className="text-primary font-medium mb-2">Backend Requirements</span>
            <select
              name="backendComplexity"
              value={formData.backendComplexity}
              onChange={handleInputChange}
              className="py-4 px-6 bg-[#039cad45] rounded-lg"
            >
              <option value="none">No Backend</option>
              <option value="simple">Simple Backend</option>
              <option value="medium">Medium Backend</option>
              <option value="complex">Complex Backend</option>
            </select>
          </label>


          <label className="flex items-center space-x-2 text-gray-400">
            <input
              type="checkbox"
              name="userAuthentication"
              checked={formData.userAuthentication}
              onChange={handleInputChange}
              className="h-5 w-5 rounded"
            />
            <span>Do you need user authentication?</span>
          </label>

          <label className="flex items-center space-x-2 text-gray-400">
            <input
              type="checkbox"
              name="provideContent"
              checked={formData.provideContent}
              onChange={handleInputChange}
              className="h-5 w-5 rounded"
            />
            <span>Will you provide the website content?</span>
          </label>

          <label className="flex items-center space-x-2 text-gray-400">
            <input
              type="checkbox"
              name="cmsRequired"
              checked={formData.cmsRequired}
              onChange={handleInputChange}
              className="h-5 w-5 rounded"
            />
            <span>Do you need a content management system (CMS)?</span>
          </label>


          <label className="flex items-center space-x-2 text-gray-400">
            <input
              type="checkbox"
              name="seoOptimization"
              checked={formData.seoOptimization}
              onChange={handleInputChange}
              className="h-5 w-5 rounded"
            />
            <span>Extra SEO Optimization</span>
          </label>


          <label className="flex items-center space-x-2 text-gray-400">
            <input
              type="checkbox"
              name="specialFeatures"
              checked={formData.specialFeatures}
              onChange={handleInputChange}
              className="h-5 w-5 rounded"
            />
            <span>Any special features?</span>
          </label>


          <button
            type="button"
            onClick={calculateEstimate}
            className="bg-primary py-3 px-8 rounded-xl text-white font-bold"
          >
            Calculate
          </button>
          <a
            href={`/contact`}
            className="bg-primary py-3 px-8 rounded-xl text-white font-bold text-center block mt-4"
          >
            Back to Contact Page
          </a>
        </form>

        {estimate !== null && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg">
            <h4 className="text-lg font-semibold">Estimated Cost:</h4>
            <p className="text-xl font-bold">€{estimate}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
