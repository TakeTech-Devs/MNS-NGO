/* eslint-disable */
import React, { useState } from 'react';
import { createCarousel, clearErrors } from '../../Actions/CarouselActions';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const CarouselForm = () => {
    const dispatch = useDispatch();
    const [carousel, setCarousel] = useState([]);
    const [carouselInput, setCarouselInput] = useState({
        title: "",
        description: "",
        myFile: ""
    });



    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }


    const handlecarouselChange = async (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const base64 = await convertToBase64(file);
            console.log("base64", base64);
            setCarouselInput({ ...carouselInput, "myFile": base64 });
        } else {
            setCarouselInput({ ...carouselInput, [e.target.name]: e.target.value });
        }
        // setCarouselInput({ ...carouselInput, [e.target.name]: e.target.value });
    }

    const addCarousel  = () => {
        if (!carouselInput.title.trim() || !carouselInput.title.trim() || !carouselInput.myFile) return;
        setCarousel([...carousel, carouselInput]);
        setCarouselInput({ title: "", description: "", myFile: "" });
    }

    const deleteCarousel  = (index) => {
        setCarousel(carousel.filter((s, i) => i !== index));
    }


    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        carousel.forEach((s) => {
            formData.append("items", JSON.stringify(s));
            console.log(s)
        });

        console.log(formData)

        dispatch(createCarousel(formData))

        setCarousel([]);
        setCarouselInput({ title: "", description: "", myFile: "" });
    }








    return (
        <div>
            <form onSubmit={submitHandler} encType='multipart/form-data'>
                <input type='text' value={carouselInput.title} name="title" onChange={handlecarouselChange} />
                <input type='text' value={carouselInput.description} name="description" onChange={handlecarouselChange} />
                <input type='file' name="myFile" value={setCarouselInput.myFile} onChange={handlecarouselChange} />
                <span onClick={() => addCarousel ()}>add </span>

                {carousel.map((spec, i) => (
                    <div key={i} >
                        <p>{spec.title}</p>
                        <p>{spec.description}</p>
                        <img src={spec.myFile} alt="Preview" />
                        {/* <div style={{ backgroundImage: `url(${spec.myFile})`, width: '100px', height: '100px' }}></div> */}
                        <span onClick={() => deleteCarousel (i)}>
                            Delete
                        </span>
                    </div>
                ))}
                <input type='submit' value="Submit" />
            </form>
        </div>
    )
}

export default CarouselForm
