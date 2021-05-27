import CustomButton from "./Costumbutton";
import {useForm} from "react-hook-form";
import {useState} from "react";
import './DeliveryForm.css'

function DeliveryForm() {

    const [succes, setSucces] = useState();
    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        mode: 'onBlur'
    });
    const selectedDelivery = watch('deliveryInput');

    function SendForm(data) {
        console.log(data)
        setSucces(true);
    }

    return (
        <>
            {!succes ?
                <form className="formcontainer" onSubmit={handleSubmit(SendForm)}>

                    <label htmlFor="firstname">Voornaam:
                        <input
                            id="firstname"
                            type="text"
                            {...register("firstnameInput", {
                                required: {
                                    value: true, message: "Vul aub een voornaam in."
                                }
                            })}
                        />
                    </label>
                    {errors.firstnameInput && <p className="error">{errors.firstnameInput.message}</p>}

                    <label htmlFor="lastname"> Achternaam:
                        <input
                            id="lastname"
                            type="text"
                            {...register("lastnameInput", {
                                required: {
                                    value: true, message: "Vul aub uw achternaam in. "
                                }
                            })}
                        />
                    </label>
                    {errors.lastnameInput && <p className="error">{errors.lastnameInput.message}</p>}

                    <label htmlFor="age"> Leeftijd:
                        <input
                            id="age"
                            type="number"
                            {...register("ageInput", {
                                required: {
                                    value: true, min: 18, message: "Dit veld is verplicht "
                                },
                                min: {
                                    value: 18, message: " U dient ouder dan 18 te zijn"
                                }
                            })}
                        />
                    </label>
                    {errors.ageInput && <p className="error">{errors.ageInput.message}</p>}

                    <label htmlFor="postcode"> Postcode:
                        <input
                            id="postcode"
                            type="text"
                            {...register("postcodeInput", {
                                required: {
                                    value: true, message: " Dit veld is verplicht."
                                },
                                pattern: {
                                    value: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
                                    message: "Voer een geldige postcode in."
                                }
                            })}
                        />
                    </label>
                    {errors.postcodeInput && <p className="error">{errors.postcodeInput.message}</p>}

                    <label className="radioform" htmlFor="Bezorgfrequentie"> Berzorgfrequentie</label>

                    <label htmlFor="delivery1">
                        <input
                            type="radio"
                            {...register("deliveryInput", {required: true})}
                            id="delivery1"
                            value="iedereweek"
                        /> Iedere week </label>

                    <label htmlFor="delivery2">
                        <input
                            type="radio"
                            {...register("deliveryInput", {required: true})}
                            id="delivery2"
                            value="omdeweek"
                        /> Om de Week </label>

                    <label htmlFor="delivery3">
                        <input
                            type="radio"
                            {...register("deliveryInput", {required: true})}
                            id="delivery3"
                            value="iederemaand"
                        /> Iedere maand </label>

                    <label htmlFor="delivery4">
                        <input
                            type="radio"
                            {...register("deliveryInput", {required: true})}
                            id="delivery4"
                            value="anders"
                        />Anders </label>


                    {selectedDelivery === 'anders' && (
                        <input
                            type="text"
                            {...register("deliveryInputAnders")}
                        />
                    )}

                    <label className="opmerking" htmlFor="remarks">Opmerkingen:</label>
                    <textarea
                        {...register("remarksInput")}
                        id="remarks" cols="50"
                        rows="10">

                </textarea>

                    <label htmlFor="termsandconditions">Ik ga akkoord met de voorwaarden
                        <input
                            type="checkbox"
                            {...register("termsandconditionsInput")}
                            id="termsandconditions"/>
                    </label>

                    <CustomButton
                        buttonname="Verzend"
                        buttontype="submit"
                        onClick={() => SendForm()}
                    />
                </form> : (<h1> Bedankt voor uw bestelling! </h1>
                )}
        </>
    )
}

export default DeliveryForm;