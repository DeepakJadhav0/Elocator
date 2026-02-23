import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { productsData } from './Data';
import toast , {Toaster}from "react-hot-toast"

const RecycleRegister = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'Laptop';
  const products = productsData[category] || [];
  const facility = useSelector(state => state.userFacility);

  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    price: '',
    pickupDate: '',
    pickupTime: '',
    location: '',
    phone: '',
    facility: facility?.name || ''
  });

  const [errors, setErrors] = useState({});

  const selectedBrandData = useMemo(() => {
    return products.find((p) => p.brand === formData.brand);
  }, [formData.brand, products]);

  const Navigation = useNavigate()


  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors = {};
    const now = new Date();
    
   
    if (!formData.brand) newErrors.brand = 'Please select a brand';
    if (!formData.model) newErrors.model = 'Model selection is required';
    if (!formData.price || formData.price <= 0) newErrors.price = 'Enter a valid price';
    if (!formData.location || formData.location.length < 10) newErrors.location = 'Please enter a full address';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = '10-digit mobile required';

    if (!formData.pickupDate) {
      newErrors.pickupDate = 'Date is required';
    } else if (formData.pickupDate < today) {
      newErrors.pickupDate = 'Past dates are not allowed';
    }

    if (!formData.pickupTime) {
      newErrors.pickupTime = 'Time is required';
    } else if (formData.pickupDate === today) {
    
      const [hours, minutes] = formData.pickupTime.split(':');
      const selectedTime = new Date();
      selectedTime.setHours(parseInt(hours), parseInt(minutes), 0);
      
      const minimumTime = new Date();
      minimumTime.setHours(now.getHours() + 1); // 1-hour buffer

      if (selectedTime < minimumTime) {
        newErrors.pickupTime = 'Pickup must be at least 1 hour from now';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error dynamically as user types
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Validated Data:', formData);
      toast('Success! Your pickup is scheduled.');
      Navigation("/successfully")
    }
  };

  // UI Components for cleaner JSX
  const InputClass = (name) => `
    w-full p-2.5 text-sm border rounded-lg outline-none transition-all
    ${errors[name] ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:ring-2 focus:ring-teal-500'}
  `;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* Progress/Header Section */}
        <div className="bg-teal-900 p-6 text-white">
          <Toaster/>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">{category} Registration</h2>
              <p className="text-teal-200 text-xs">E-waste Recycling Initiative</p>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-xs uppercase tracking-widest text-teal-400">Status</span>
              <p className="font-mono text-sm">Awaiting Details</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Brand Dropdown */}
            <div className="relative">
              <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Brand</label>
              <select name="brand" value={formData.brand} onChange={handleChange} className={InputClass('brand')}>
                <option value="">Select Brand</option>
                {products.map((p, i) => <option key={i} value={p.brand}>{p.brand}</option>)}
              </select>
              {errors.brand && <p className="text-[10px] text-red-600 mt-1 absolute">{errors.brand}</p>}
            </div>

            {/* Model Dropdown */}
            <div className="relative">
              <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Model</label>
              <select name="model" value={formData.model} onChange={handleChange} className={InputClass('model')}>
                <option value="">{formData.brand ? 'Select Model' : 'Select Brand First'}</option>
                {selectedBrandData?.models.map((m, i) => <option key={i} value={m}>{m}</option>)}
              </select>
              {errors.model && <p className="text-[10px] text-red-600 mt-1 absolute">{errors.model}</p>}
            </div>

            {/* Price Input */}
            <div className="relative">
              <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Expected Value</label>
              <input type="number" name="price" placeholder="Enter Price" onChange={handleChange} className={InputClass('price')} />
              {errors.price && <p className="text-[10px] text-red-600 mt-1 absolute">{errors.price}</p>}
            </div>

            {/* Pickup Date - Restricted to min={today} */}
            <div className="relative">
              <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Pickup Date</label>
              <input type="date" name="pickupDate" min={today} onChange={handleChange} className={InputClass('pickupDate')} />
              {errors.pickupDate && <p className="text-[10px] text-red-600 mt-1 absolute">{errors.pickupDate}</p>}
            </div>

            {/* Pickup Time */}
            <div className="relative">
              <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Pickup Time</label>
              <input type="time" name="pickupTime" onChange={handleChange} className={InputClass('pickupTime')} />
              {errors.pickupTime && <p className="text-[10px] text-red-600 mt-1 absolute">{errors.pickupTime}</p>}
            </div>

            {/* Phone */}
            <div className="relative">
              <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Contact Number</label>
              <input type="tel" name="phone" placeholder="9876543210" onChange={handleChange} className={InputClass('phone')} />
              {errors.phone && <p className="text-[10px] text-red-600 mt-1 absolute">{errors.phone}</p>}
            </div>

            {/* Location (Full Width) */}
            <div className="md:col-span-2 relative">
              <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Pickup Address</label>
              <input type="text" name="location" placeholder="H-No, Street, Landmark, City" onChange={handleChange} className={InputClass('location')} />
              {errors.location && <p className="text-[10px] text-red-600 mt-1 absolute">{errors.location}</p>}
            </div>

            {/* Read-Only Facility */}
            <div>
              <label className="text-xs font-bold text-gray-500 mb-1 block uppercase">Service Center</label>
              <div className="p-2.5 text-sm bg-gray-100 border border-gray-200 rounded-lg text-gray-400 font-medium">
                {facility?.name || "Auto-assigned"}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t">
            <p className="text-xs text-gray-400 max-w-xs text-center sm:text-left">
              By submitting, you agree to our e-waste recycling policy and terms of service.
            </p>
            <button 
              type="submit"
              className="w-full sm:w-64 bg-teal-600 hover:bg-teal-700 text-white font-black py-4 rounded-xl shadow-lg transition-all active:scale-95 uppercase tracking-widest text-sm"
            >
              Confirm Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecycleRegister;