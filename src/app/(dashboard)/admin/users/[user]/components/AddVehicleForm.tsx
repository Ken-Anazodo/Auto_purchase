"use client";

import React, { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { vehicleFeatures } from "./FeatureChecklistData";
import { driveTrains, carConditions, bodyTypes, colors } from "./VehicleDropdownData";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface AddVehicleFormProps {
  onCancel: () => void;
}

const AddVehicleForm: React.FC<AddVehicleFormProps> = ({ onCancel }) => {
  // Form state (simplified)
  const [formData, setFormData] = useState({
    fullName: "Akeem John", // Pre-filled based on screenshot
    businessName: "Autobuy",
    email: "0112345678910", // Screenshot shows phone number in email field? Following screenshot for now but likely a design quirk
    phone: "0112345678910",
    address: "My address is...",
    location: "",
    vin: "011234567",
    idNumber: "011234567",
    make: "",
    model: "Corolla",
    condition: "",
    trim: "Toyota",
    year: "2018",
    bodyType: "",
    driveTrain: "",
    exteriorColor: "",
    interiorColor: "",
    actualPrice: "₦40,000,000",
    salesPrice: "₦45,000,000",
    negotiable: true,
    loanFinancing: false,
    bulkPurchase: false,
    isUploadsOpen: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Upload State
  const [uploads, setUploads] = useState<{
    exterior: File[];
    interior: File[];
    engine: File[];
    trunk: File[];
    tire: File[];
    diagnostic: File | null;
  }>({
    exterior: [],
    interior: [],
    engine: [],
    trunk: [],
    tire: [],
    diagnostic: null,
  });

  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleImageUpload = (category: string, files: FileList | null) => {
      if (!files) return;
      const newFiles = Array.from(files);
      setUploads(prev => ({
          ...prev,
          [category as keyof typeof prev]: [...(prev[category as keyof typeof prev] as File[]), ...newFiles]
      }));
  };

  const removeImage = (category: string, index: number) => {
      setUploads(prev => ({
          ...prev,
          [category as keyof typeof prev]: (prev[category as keyof typeof prev] as File[]).filter((_, i) => i !== index)
      }));
  };

  const handleReportUpload = (files: FileList | null) => {
      if (!files || files.length === 0) return;
      setUploads(prev => ({ ...prev, diagnostic: files[0] }));
  };

  const removeReport = () => {
      setUploads(prev => ({ ...prev, diagnostic: null }));
  };

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
      setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleSelectOption = (name: string, value: string) => {
      setFormData(prev => ({ ...prev, [name]: value }));
      setOpenDropdown(null);
  };

  const handleSubmit = () => {
      setShowSuccessModal(true);
  };

  // Helper component for Searchable Dropdown
  const renderCombobox = (
      name: string, 
      options: (string | { name: string; code?: string; border?: boolean })[], 
      placeholder: string,
      label: string,
      isColor: boolean = false
  ) => {
      const isOpen = openDropdown === name;
      const value = formData[name as keyof typeof formData] as string;

      return (
          <div className="space-y-2 relative">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <div className="relative">
                <Input 
                    name={name}
                    placeholder={placeholder} 
                    className="h-12 rounded-lg bg-white border-gray-200 pr-10" 
                    value={value}
                    onChange={handleInputChange}
                    onClick={() => toggleDropdown(name)}
                    autoComplete="off"
                />
                <div 
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                    onClick={() => toggleDropdown(name)}
                >
                    <Icon icon="mdi:chevron-down" className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </div>
            </div>
            
            {isOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {options.map((opt, idx) => {
                        const optLabel = typeof opt === 'string' ? opt : opt.name;
                        const optColor = typeof opt !== 'string' ? opt : null;
                        
                        if (value && !optLabel.toLowerCase().includes(value.toLowerCase())) return null;

                        return (
                            <div 
                                key={idx} 
                                className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between text-sm text-gray-700"
                                onClick={() => handleSelectOption(name, optLabel)}
                            >
                                <div className="flex items-center gap-3">
                                     <div className={`w-4 h-4 rounded border flex items-center justify-center ${value === optLabel ? "bg-autobuy-primary2.5 border-autobuy-primary2.5 text-white" : "border-gray-300"}`}>
                                         {value === optLabel && <Icon icon="mdi:check" className="w-3 h-3" />}
                                     </div>
                                     <span>{optLabel}</span>
                                </div>
                                
                                {isColor && optColor && (
                                    <div 
                                        className={`w-6 h-6 rounded-full border ${optColor.border ? "border-gray-300" : "border-transparent"}`} 
                                        style={{ backgroundColor: optColor.code }} 
                                    />
                                )}
                            </div>
                        );
                    })}
                     <div 
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-2 text-autobuy-primary2.5 text-sm font-medium border-t border-gray-50"
                         onClick={() => setOpenDropdown(null)}
                     >
                        <Icon icon="mdi:plus" className="w-4 h-4" />
                        Others
                     </div>
                </div>
            )}
            {isOpen && <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setOpenDropdown(null)} />}
          </div>
      );
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900">Add New Vehicle</h2>
        <p className="text-sm text-gray-500 mt-1">
          Add this seller&apos;s vehicle details to create a new listing
        </p>
      </div>

      <div className="h-px bg-autobuy-neutral-6 mb-8" />

      {/* Seller Information */}
      <div className="mb-8">
        <h3 className="text-base font-semibold text-autobuy-blue-2 mb-6">Seller Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <Input
              name="fullName"
              placeholder="Enter full name"
              className="h-12 rounded-lg bg-white border-gray-200"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Business Name (if available)</label>
            <Input
              name="businessName"
              placeholder="Enter business name"
              className="h-12 rounded-lg bg-white border-gray-200"
              value={formData.businessName}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email:</label>
            <Input
              name="email"
              placeholder="Enter email"
              className="h-12 rounded-lg bg-white border-gray-200"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone No:</label>
            <Input
              name="phone"
              placeholder="Enter phone number"
              className="h-12 rounded-lg bg-white border-gray-200"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Address</label>
            <Input
              name="address"
              placeholder="Enter address"
              className="h-12 rounded-lg bg-white border-gray-200"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Location</label>
            <Select onValueChange={(val) => handleSelectChange("location", val)}>
              <SelectTrigger className="h-12 rounded-lg bg-white border-gray-200 text-gray-900">
                <SelectValue placeholder="Lagos, Nigeria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lagos">Lagos, Nigeria</SelectItem>
                <SelectItem value="abuja">Abuja, Nigeria</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Vehicle Information */}
      <div className="mb-8">
        <h3 className="text-base font-semibold text-autobuy-blue-2 mb-6">Vehicle Information</h3>
        <div className="h-px bg-autobuy-neutral-6 mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">VIN</label>
            <Input
              name="vin"
              placeholder="Enter VIN"
              className="h-12 rounded-lg bg-white border-gray-200"
              value={formData.vin}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">ID Number</label>
            <Input
              name="idNumber"
              placeholder="Enter ID Number"
              className="h-12 rounded-lg bg-white border-gray-200"
              value={formData.idNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Vehicle Make</label>
            <Select onValueChange={(val) => handleSelectChange("make", val)}>
              <SelectTrigger className="h-12 rounded-lg bg-white border-gray-200 text-gray-900">
                <SelectValue placeholder="Toyota" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="honda">Honda</SelectItem>
                <SelectItem value="mercedes">Mercedes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Vehicle Model</label>
            <Input
              name="model"
              placeholder="Enter model"
              className="h-12 rounded-lg bg-white border-gray-200"
              value={formData.model}
              onChange={handleInputChange}
            />
          </div>

          {renderCombobox("condition", carConditions, "Select Condition", "Condition")}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Vehicle Trim</label>
            <Input
              name="trim"
              placeholder="Enter trim"
              className="h-12 rounded-lg bg-white border-gray-200"
              value={formData.trim}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Year</label>
            <Input
              name="year"
              placeholder="Enter year"
              className="h-12 rounded-lg bg-white border-gray-200"
              value={formData.year}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mb-8">
        <h3 className="text-base font-semibold text-autobuy-blue-2 mb-6">Overview</h3>
        <div className="h-px bg-autobuy-neutral-6 mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
           {/* Custom Dropdown: Body Type */}
           {renderCombobox("bodyType", bodyTypes, "Select Body Type", "Body Type")}

           {/* Custom Dropdown: Drive Train */}
           {renderCombobox("driveTrain", driveTrains, "Select Drive Train", "Drive Train")}

           {/* Custom Dropdown: Exterior Color */}
           {renderCombobox("exteriorColor", colors, "Select Color", "Exterior Color", true)}

           {/* Custom Dropdown: Interior Color */}
           {renderCombobox("interiorColor", colors, "Select Color", "Interior Color", true)}
        </div>
      </div>

      {/* Pricing & Sales Conditions */}
      <div className="mb-8">
        <h3 className="text-base font-semibold text-autobuy-blue-2 mb-1">Pricing & Sales Conditions</h3>
        <p className="text-sm text-gray-500 mb-6">Set pricing and available sales option for this vehicle.</p>
        <div className="h-px bg-autobuy-neutral-6 mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Vehicle Actual Price</label>
                <Input
                    name="actualPrice"
                    placeholder="₦40,000,000"
                    className="h-12 rounded-lg bg-white border-gray-200"
                    value={formData.actualPrice}
                    onChange={handleInputChange}
                />
            </div>
             <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Vehicle Sales Price</label>
                <Input
                    name="salesPrice"
                    placeholder="₦45,000,000"
                    className="h-12 rounded-lg bg-white border-gray-200"
                    value={formData.salesPrice}
                    onChange={handleInputChange}
                />
            </div>
        </div>

        <div className="space-y-8">
            {/* Negotiable */}
            <div>
                <p className="text-sm font-medium text-gray-900 mb-4">Allow buyers to submit price offers for this vehicle.</p>
                <label className="flex items-center gap-3 cursor-pointer w-fit">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.negotiable ? "border-autobuy-blue-1" : "border-gray-300"}`}>
                        {formData.negotiable && <div className="w-2.5 h-2.5 rounded-full bg-autobuy-blue-1" />}
                    </div>
                    <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={formData.negotiable}
                        onChange={(e) => setFormData(prev => ({ ...prev, negotiable: e.target.checked }))}
                    />
                    <span className="text-sm text-gray-700">Negotiable</span>
                </label>
            </div>

            {/* Loan Financing */}
             <div>
                <p className="text-sm font-medium text-gray-900 mb-4">Enable buyers to apply for loan financing for this vehicle.</p>
                <label className="flex items-center gap-3 cursor-pointer w-fit">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.loanFinancing ? "border-autobuy-blue-1" : "border-gray-300"}`}>
                        {formData.loanFinancing && <div className="w-2.5 h-2.5 rounded-full bg-autobuy-blue-1" />}
                    </div>
                     <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={formData.loanFinancing}
                        onChange={(e) => setFormData(prev => ({ ...prev, loanFinancing: e.target.checked }))}
                    />
                    <span className="text-sm text-gray-700">Loan Financing Available</span>
                </label>
            </div>

             {/* Bulk Purchase */}
             <div>
                <p className="text-sm font-medium text-gray-900 mb-4">Make this vehicle available for bulk purchases.</p>
                <label className="flex items-center gap-3 cursor-pointer w-fit">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.bulkPurchase ? "border-autobuy-blue-1" : "border-gray-300"}`}>
                        {formData.bulkPurchase && <div className="w-2.5 h-2.5 rounded-full bg-autobuy-blue-1" />}
                    </div>
                     <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={formData.bulkPurchase}
                        onChange={(e) => setFormData(prev => ({ ...prev, bulkPurchase: e.target.checked }))}
                    />
                    <span className="text-sm text-gray-700">Bulk Purchase Available</span>
                </label>
            </div>
        </div>
      </div>

      {/* Uploads Section */}
      <div className="mb-8">
        <h3 className="text-base font-semibold text-autobuy-blue-2 mb-6">Uploads</h3>
        <div className="h-px bg-autobuy-neutral-6 mb-6" />

        {/* Collapsible Header */}
        <button 
          onClick={() => setFormData(prev => ({ ...prev, isUploadsOpen: !prev.isUploadsOpen }))}
          className="w-full flex items-center justify-between bg-autobuy-blue-6 bg-opacity-30 px-6 py-4 rounded-t-xl hover:bg-opacity-50 transition-colors"
        >
          <span className="text-sm font-bold text-autobuy-blue-2">Upload Vehicle Images</span>
          <Icon 
            icon="mdi:chevron-down" 
            className={`w-5 h-5 text-gray-500 transition-transform ${formData.isUploadsOpen ? "rotate-180" : ""}`} 
          />
        </button>

        {formData.isUploadsOpen && (
          <div className="border border-t-0 border-autobuy-neutral-6 rounded-b-xl p-6 md:p-8 space-y-10">
            
            {/* Image Categories Helper */}
            {[
              { title: "Exterior Images (Min 3)", key: "exterior" },
              { title: "Interior Images (Min 3)", key: "interior" },
              { title: "Engine Images (Min 3)", key: "engine" },
              { title: "Trunk Images (Min 3)", key: "trunk" },
              { title: "Tire Images (Min 3)", key: "tire" },
            ].map((category, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-black block" />
                   {category.title}
                </h4>
                
                <input 
                    type="file" 
                    multiple 
                    accept="image/*"
                    className="hidden"
                    ref={el => { fileInputRefs.current[category.key] = el }}
                    onChange={(e) => handleImageUpload(category.key, e.target.files)}
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {/* Render Uploaded Images */}
                  {uploads[category.key as keyof typeof uploads] && (uploads[category.key as keyof typeof uploads] as File[]).map((file, i) => (
                       <div key={i} className="flex flex-col gap-2 relative">
                            <div className="aspect-square bg-gray-100 rounded-lg border border-gray-200 overflow-hidden relative group">
                                <img 
                                    src={URL.createObjectURL(file)} 
                                    alt={`upload-${i}`} 
                                    className="w-full h-full object-cover" 
                                />
                                <button 
                                    onClick={() => removeImage(category.key, i)}
                                    className="absolute top-1 right-1 bg-white/80 rounded-full p-0.5 hover:bg-white text-gray-700 shadow-sm"
                                >
                                    <Icon icon="mdi:close" className="w-3 h-3" />
                                </button>
                            </div>
                            <span className="text-[10px] text-center text-gray-500 truncate px-1">
                                {file.name}
                            </span>
                       </div>
                  ))}

                  {/* Upload Button Slot */}
                  <div className="flex flex-col gap-2">
                    <div 
                        onClick={() => fileInputRefs.current[category.key]?.click()}
                        className="aspect-square bg-gray-100 rounded-lg border border-gray-200 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                         <div className="w-8 h-8 mb-2 text-gray-400">
                              <Icon icon="mdi:tray-arrow-up" className="w-full h-full" />
                         </div>
                         <span className="text-[10px] text-gray-500">Upload Image</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Video Input */}
            <div>
               <h4 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-black block" />
                   Vehicle Walkthrough Video (Youtube)
                </h4>
                <Input
                    placeholder="Paste youtube link"
                    className="h-12 rounded-lg bg-white border-gray-200"
                />
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-gray-500 block" />
                    A short walkthrough video increases buyer confidence and reduce inspection requests
                </p>
            </div>

            {/* Diagnostic Report */}
            <div>
               <h4 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-black block" />
                   Diagnostic Report (PDF File)
                </h4>
                
                <div className="space-y-3">
                <div className="space-y-3">
                     <input 
                        type="file" 
                        accept=".pdf"
                        className="hidden"
                        id="diagnostic-upload"
                        onChange={(e) => handleReportUpload(e.target.files)}
                     />

                    {/* Uploaded File */}
                    {uploads.diagnostic ? (
                        <div className="flex items-center justify-between p-4 bg-autobuy-blue-6 bg-opacity-20 border border-autobuy-blue-2/20 rounded-lg">
                             <div className="flex items-center gap-3">
                                 <Icon icon="mdi:file-pdf-box" className="w-6 h-6 text-red-500" />
                                 <span className="text-sm text-gray-700 font-medium">{uploads.diagnostic.name} <span className="text-gray-400 text-xs ml-1">({(uploads.diagnostic.size / 1024 / 1024).toFixed(2)}mb)</span></span>
                             </div>
                             <button 
                                onClick={removeReport}
                                className="text-gray-400 hover:text-gray-600"
                             >
                                 <Icon icon="mdi:close" className="w-5 h-5" />
                             </button>
                        </div>
                    ) : (
                        /* Upload Area */
                        <div 
                            onClick={() => document.getElementById('diagnostic-upload')?.click()}
                            className="border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            <div className="w-10 h-10 mb-3 text-gray-400">
                                 <Icon icon="mdi:tray-arrow-up" className="w-full h-full" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-400">PDF (max. 10MB)</p>
                        </div>
                    )}
                </div>
                </div>
            </div>

          </div>
        )}
      </div>

      {/* Vehicle Features Checklist */}
      <div className="mb-8">
        <div className="bg-autobuy-blue-6 bg-opacity-30 p-4 rounded-t-xl mb-6">
            <h3 className="text-base font-bold text-autobuy-blue-2">Vehicle Features Checklist</h3>
        </div>

        <div className="space-y-4 px-2">
            {vehicleFeatures.map((category, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4 last:border-0">
                    <button 
                        onClick={() => {}}
                        className="hidden" // Hiding the old button logic ref
                    ></button>
                    <details className="group">
                        <summary className="flex items-center justify-between w-full cursor-pointer list-none text-autobuy-blue-2 font-semibold text-sm py-3 bg-autobuy-blue-6 bg-opacity-10 px-4 rounded-lg mb-4 hover:bg-opacity-20 transition-colors">
                            {category.title}
                            <Icon icon="mdi:chevron-down" className="w-5 h-5 transition-transform group-open:rotate-180" />
                        </summary>
                        
                        <div className="px-4 space-y-6 text-gray-600">
                             {/* Subgroups */}
                             {category.subgroups?.map((sub, sIdx) => (
                                 <div key={sIdx}>
                                     <h5 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-gray-800 rounded-full" />
                                        {sub.title}
                                     </h5>
                                     <div className="grid grid-cols-1 gap-2 pl-3">
                                         {sub.items.map((item, iIdx) => (
                                             <label key={iIdx} className="flex items-center gap-3 cursor-pointer">
                                                 <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-autobuy-blue-2 focus:ring-autobuy-blue-2" />
                                                 <span className="text-sm">{item}</span>
                                             </label>
                                         ))}
                                     </div>
                                 </div>
                             ))}

                             {/* Items */}
                             {category.items && category.items.length > 0 && (
                                <div className="grid grid-cols-1 gap-3">
                                    {category.items.map((item, iIdx) => (
                                        <label key={iIdx} className="flex items-center gap-3 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-autobuy-blue-2 focus:ring-autobuy-blue-2" />
                                            <span className="text-sm">{item}</span>
                                        </label>
                                    ))}
                                </div>
                             )}

                             {/* Others Input */}
                             {category.othersInput && (
                                 <div className="mt-4">
                                     <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                                         <Icon icon="mdi:plus" className="w-4 h-4" />
                                         Others
                                     </button>
                                 </div>
                             )}
                        </div>
                    </details>
                </div>
            ))}
        </div>
        
        {/* Additional Features Text Area */}
        <div className="mt-8 px-2">
            <label className="text-xs text-gray-400 mb-2 block">Specify additional features</label>
            <Input 
                placeholder="Enter Input"
                className="h-12 rounded-lg bg-white border-gray-200"
            />
        </div>
      </div>

       {/* Actions */}
       <div className="flex items-center justify-between gap-4 mt-16 pt-6 border-t border-gray-100">
            <Button
                variant="ghost"
                onClick={onCancel}
                className="h-12 px-8 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 w-full md:w-auto"
            >
                Cancel
            </Button>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
                <Button
                    variant="outline"
                    className="h-12 px-8 rounded-xl border-autobuy-blue-2 text-autobuy-blue-2 font-medium hover:bg-blue-50 w-full md:w-auto"
                >
                    Save as Draft
                </Button>
                <Button
                    // onClick={handleSubmit}
                    className="h-12 px-8 rounded-xl bg-autobuy-primary2.5 text-white font-medium hover:bg-blue-600 w-full md:w-auto"
                >
                    Upload Vehicle
                </Button>
            </div>
        </div>

        {/* Success Modal */}
        {/* <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
            <DialogContent className="sm:max-w-md p-8 flex flex-col items-center text-center rounded-3xl [&>button]:hidden">
                <div className="w-20 h-20 bg-autobuy-primary2.5 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-100">
                    <Icon icon="mdi:check" className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Vehicle Added Successfully</h2>
                <p className="text-gray-500 mb-8">You can now review it under listings</p>
                <Button
                    onClick={onCancel} 
                    className="w-full h-12 rounded-xl bg-autobuy-primary2.5 text-white font-semibold hover:bg-blue-600 text-base"
                >
                    View Listings
                </Button>
            </DialogContent>
        </Dialog> */}
    </div>
  );
};

export default AddVehicleForm;
