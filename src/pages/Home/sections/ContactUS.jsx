import { useState } from "react";

const ContactUS = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Invalid email address";
    if (!formData.phone.match(/^\+?[0-9]{9,15}$/))
      newErrors.phone = "Invalid phone number";
    if (!formData.service) newErrors.service = "Please choose a service";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      // send data to backend here
      alert("Free call booked successfully!");
    }
  };

  return (
    <section id="About" className="container sectionPadding">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-5xl font-bold mb-4">
            Let’s Talk
            <br />
            About Your
            <br />
            Next Big Move
          </h2>
          <p className="text-gray-300">
            Book your free 15-minute consultation — tell us about your project
            and we’ll show you how we can help.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-light-gray p-8 rounded-lg space-y-4"
        >
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Name"
              className={`w-full p-4 rounded-lg text-lg bg-dark-gray border-2 ${
                errors.fullName ? "border-dark-red" : "border-transparent"
              } focus:outline-none text-white`}
            />
            {errors.fullName && (
              <p className="text-dark-red font-semibold mt-1">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className={`w-full p-4 rounded-lg text-lg bg-dark-gray border-2 ${
                errors.email ? "border-dark-red" : "border-transparent"
              } focus:outline-none text-white`}
            />
            {errors.email && (
              <p className="text-dark-red font-semibold mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+2012345678"
              className={`w-full p-4 rounded-lg text-lg bg-dark-gray border-2 ${
                errors.phone ? "border-dark-red" : "border-transparent"
              } focus:outline-none text-white`}
            />
            {errors.phone && (
              <p className="text-dark-red font-semibold mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">What do you need help with?</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full p-4 rounded-lg text-lg bg-dark-gray border-2 cursor-pointer ${
                errors.service ? "border-dark-red" : "border-transparent"
              } focus:outline-none text-white`}
            >
              <option value="">Choose a service</option>
              <option value="web">Website Development</option>
              <option value="design">UI/UX Design</option>
              <option value="seo">SEO & Marketing</option>
            </select>
            {errors.service && (
              <p className="text-dark-red font-semibold mt-1">
                {errors.service}
              </p>
            )}
          </div>

          <button type="submit" className="mainBtn w-full relative">
            Book My Free Call →
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUS;
