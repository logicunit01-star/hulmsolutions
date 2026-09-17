"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinalCtaFormProps {
  formHeading?: string;
  formSubheading?: string;
}

export function FinalCtaForm({
  formHeading = "Create your free account",
  formSubheading = "Takes less than 2 minutes. No credit card required.",
}: FinalCtaFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    industry: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "https://app.hulmsolutions.com/Register";
  };

  return (
    <div className="bg-white rounded-[28px] p-6 sm:p-8 lg:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-white/20">
      <div className="mb-6">
        <h3 className="text-2xl sm:text-[26px] font-semibold text-[#152825] tracking-tight">
          {formHeading}
        </h3>
        <p className="text-sm text-zinc-500 mt-1 font-normal">
          {formSubheading}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1">
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ahmed Khan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-11 sm:h-12 px-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-[#209f8f] focus:ring-3 focus:ring-[#209f8f]/15 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1">
              Business Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Khan Retail"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full h-11 sm:h-12 px-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-[#209f8f] focus:ring-3 focus:ring-[#209f8f]/15 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="0300 1234567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full h-11 sm:h-12 px-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-[#209f8f] focus:ring-3 focus:ring-[#209f8f]/15 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="name@business.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-11 sm:h-12 px-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-[#209f8f] focus:ring-3 focus:ring-[#209f8f]/15 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1">
            Which industry do you belong to?
          </label>
          <div className="relative">
            <select
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full h-11 sm:h-12 px-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:bg-white focus:border-[#209f8f] focus:ring-3 focus:ring-[#209f8f]/15 outline-none transition-all appearance-none pr-10 cursor-pointer"
            >
              <option value="">Select your industry</option>
              <option value="retail">Retail Store</option>
              <option value="restaurant">Restaurant / Cafe</option>
              <option value="pharmacy">Pharmacy Store</option>
              <option value="bakery">Bakery</option>
              <option value="clothing">Clothing Store</option>
              <option value="manufacturing">Manufacturing Industry</option>
              <option value="furniture">Furniture Store</option>
              <option value="salon">Salon / Spa</option>
              <option value="jewelry">Jewelry Shop</option>
              <option value="electric">Electric Store</option>
              <option value="toys">Toys Store</option>
              <option value="other">Other Business</option>
            </select>
            <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full h-12 sm:h-13 rounded-xl bg-[#209f8f] hover:bg-[#1a8578] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Start today with Hulm</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="pt-1 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs text-zinc-500 font-medium">
          <span>🔒 Free 14-day trial</span>
          <span>•</span>
          <span>No credit card needed</span>
          <span>•</span>
          <span>Cancel anytime</span>
        </div>
      </form>
    </div>
  );
}
