"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { State, City } from "country-state-city";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateUserMutation } from "@/services/admin/adminuserApi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const CreateUserPage = () => {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    state: "",
    city: "",
    address: "",
    userType: "",
    password: "",
    confirmPassword: "",
  });

  const [createUser, { isLoading }] = useCreateUserMutation();
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async () => {
    try {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      
      const payload = {
        ...formData,
        userType: formData.userType.toUpperCase(),
      };

      await createUser(payload).unwrap();
      setShowSuccessModal(true);
    } catch (err: any) {
      setError(err?.data?.message || err?.message || "Failed to create user");
    }
  };

  return (
    <div className="">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8">
        <button
          onClick={() => router.push("/admin/users")}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Icon icon="mdi:arrow-left" className="w-5 h-5" />
          All Users
        </button>
        <span className="text-gray-900 font-bold text-xl">•</span>
        <span className="text-sm font-semibold text-gray-900">Create New User</span>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl border border-autobuy-neutral-6 shadow-sm p-8 lg:p-10">
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900">Add New User</h2>
          <p className="text-sm text-gray-500 mt-1">
            Create a new user account as either a Buyer, Seller, or both.
            <br />
            Fill in their basic information and assign user roles.
          </p>
        </div>

        <div className="h-px bg-autobuy-neutral-6 mb-8" />

        {/* User Information Section */}
        <div className="mb-8">
          <h3 className="text-base font-semibold text-autobuy-blue-2 mb-6">User Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <Input
                name="firstName"
                placeholder="Enter user first name"
                className="h-12 rounded-lg bg-white border-gray-200"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            {/* Empty column for layout balance if needed, but grid serves well */}
             <div className="hidden md:block"></div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <Input
                name="lastName"
                placeholder="Enter user last name"
                className="h-12 rounded-lg bg-white border-gray-200"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
             <div className="hidden md:block"></div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <Input
                name="email"
                placeholder="Myemail@gmail.com"
                className="h-12 rounded-lg bg-white border-gray-200"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone No</label>
              <Input
                name="phoneNumber"
                placeholder="09012345678" 
                className="h-12 rounded-lg bg-white border-gray-200"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">State</label>
              <Select onValueChange={(val) => {
                  handleSelectChange("state", val);
                  handleSelectChange("city", ""); // Reset city when state changes
                }}>
                <SelectTrigger className="h-12 rounded-lg bg-white border-gray-200 text-gray-500">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {State.getStatesOfCountry("NG").map((state) => (
                    <SelectItem key={state.isoCode} value={state.name}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">City</label>
              <Select 
                // disabled={!formData.state}
                value={formData.city} 
                onValueChange={(val) => handleSelectChange("city", val)}>
                <SelectTrigger className="h-12 rounded-lg bg-white border-gray-200 text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed">
                  <SelectValue placeholder={formData.state ? "Select city" : "Select state first"} />
                </SelectTrigger>
                <SelectContent>
                   {formData.state && City.getCitiesOfState("NG", formData.state).map((city) => (
                    <SelectItem key={city.name} value={city.name}>
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Address</label>
              <Input
                name="address"
                placeholder="Enter user address"
                className="h-12 rounded-lg bg-white border-gray-200"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">User Role</label>
              <Select onValueChange={(val) => handleSelectChange("userType", val)}>
                <SelectTrigger className="h-12 rounded-lg bg-white border-gray-200 text-gray-500">
                  <SelectValue placeholder="Seller" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seller">Seller</SelectItem>
                  <SelectItem value="buyer">Buyer</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Login Access Section */}
        <div className="mb-8">
           <h3 className="text-base font-semibold text-autobuy-blue-2 mb-6">Login Access</h3>
           <div className="h-px bg-autobuy-neutral-6 mb-6" />

           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2 md:col-span-2">
                   <p className="text-sm text-gray-500 mb-2">Create Login Password</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Create Password</label>
                  <div className="relative">
                    <Input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        className="h-12 rounded-lg bg-white border-gray-200 pr-10"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        <Icon icon={showPassword ? "mdi:eye-off" : "mdi:eye"} className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                 <div className="hidden md:block"></div>

                 <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                  <div className="relative">
                    <Input
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter password"
                        className="h-12 rounded-lg bg-white border-gray-200 pr-10"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        <Icon icon={showConfirmPassword ? "mdi:eye-off" : "mdi:eye"} className="w-5 h-5" />
                    </button>
                  </div>
                </div>
           </div>
        </div>

        <div className="h-px bg-autobuy-neutral-6 mb-8" />

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 text-autobuy-red-1 text-sm border border-red-100 flex items-center gap-2">
             <Icon icon="mdi:alert-circle-outline" className="w-5 h-5 flex-shrink-0" />
             <p>{error}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-4">
            <Button
                variant="ghost"
                onClick={() => router.push("/admin/users")}
                className="h-12 px-8 rounded-xl bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 w-1/2 md:w-auto"
                disabled={isLoading}
            >
                Cancel
            </Button>
            <Button
                onClick={handleSubmit}
                disabled={isLoading}
                className="h-12 px-8 rounded-xl bg-autobuy-primary2.5 text-white font-medium hover:bg-blue-600 w-1/2 md:w-auto flex-1 md:flex-none flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isLoading && <Icon icon="mdi:loading" className="w-5 h-5 animate-spin" />}
                Create User
            </Button>
        </div>

      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md p-8 flex flex-col items-center text-center rounded-3xl [&>button]:hidden">
             {/* Custom Close Button handling via state if needed, but dialog has default. 
                 Design shows no close X, just actions. &>button:hidden hides the default X */}
             
             <div className="w-20 h-20 bg-autobuy-primary2.5 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-100">
                <Icon icon="mdi:check" className="w-10 h-10 text-white" />
             </div>

             <h2 className="text-xl font-bold text-gray-900 mb-2">
                User Account Created Successfully
             </h2>
             <p className="text-gray-500 mb-8">
                The new account is now active and ready to use.
             </p>

             <Button
                onClick={() => router.push("/admin/users")}
                className="w-full h-12 rounded-xl bg-autobuy-primary2.5 text-white font-semibold hover:bg-blue-600 text-base"
             >
                Return to User List
             </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateUserPage;