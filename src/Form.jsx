import React, { useRef } from "react";

const Form = () => {
    let name = useRef();
    let cource = useRef();
    let country = useRef();
    let man = useRef();
    let woman = useRef();

    const submitData = (e) => {
        e.preventDefault();
        alert(`First Name : ${name.current.value}
          cource : ${cource.current.value}
          country : ${country.current.value}
          Gender : ${man.current.checked === true ? man.current.value : woman.current.value}`);
        name.current.value = "";
        cource.current.value = "";
        country.current.value = "";
        man.current.checked = false;
        woman.current.checked = false;
    };
    return (
        <section>
            <form onSubmit={submitData}>
                Name :{" "}
                <input ref={name} type="text" placeholder="Enter your Name" />
                <br />
                Cource :{" "}
                <select ref={cource} className="role" style={{ marginBottom: "50px" }}>
                    <option value="">Select</option>
                    <option value="BCA">BCA</option>
                    <option value="BBA">BBA</option>
                    <option value="B COM">B COM</option>
                    <option value="BSC IT">BSC IT</option>
                </select>
                Country :{" "}
                <select ref={country} className="role" style={{ marginBottom: "50px" }}>
                    <option value="">Select</option>
                    <option value="INDIA">INDIA</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
                <br />
                <input type="radio" className="main1" name="Gender" ref={man} value="man"/>Man
                <br />
                <input type="radio" className="main2" name="Gender" ref={woman} value="woman"/>woman
                
                <input type="submit" value="Submit" id="submit" />
            </form>
        </section>
    );
};

export default Form;