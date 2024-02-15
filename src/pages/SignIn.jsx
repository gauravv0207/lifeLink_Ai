import React, { useState } from 'react'

export default function SignIn() {
    const [formData, setFormData] = useState({
      username: "",
      password: "",
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmit = () => {};
  return (<>
    <div>SignIn</div>
  </>
  )
}
