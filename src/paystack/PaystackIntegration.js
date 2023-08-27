import { useState } from "react";
import PaystackPop from "@paystack/inline-js";



const PaystackIntegration = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const paywithpaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop()
    paystack.newTransaction({
        key: "pk_test_221540f3ff1eeeaaaee31855d1cbd7a12eb23c4f",
        amount: amount * 100,
        email,
        firstName,
        lastName,
        onSuccess(transaction){
            let message = `Payment Complete Reference ${transaction.reference}`
            alert(message)
            setEmail("")
            setAmount("")
        },
        onCancel(){
            alert("You have Canceled the transaction")
        }
    })
  }
    return(
        <div className="">
            <form className="flex flex-col  items-center space-x-0 space-y-2 bg-white shadow-lg mt-12 md:lg:mt-12 w-[25rem] h-[30rem] rounded-lg justify-center ml-[33rem] md:lg:ml-[33rem]">
                   <h3 className="max-w-md text-3xl text-darkGrayishBlue font-bold">Make Payment</h3> 
                <div className="form-group">
                    <label className="font-medium text-darkBlue -mt-3 text-lg">Email Address</label> <br />
                    <input type="email"
                    placeholder="Enter Email address"
                     id="email-address" 
                     className="w-[15rem] h-[3rem] bg-slate-200 focus:outline-0 px-2"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                </div>

                <div className="form-group">
                    <label className="font-medium text-darkBlue text-lg">Amount</label> <br />
                    <input type="tel"
                     id="amount" 
                     placeholder="Enter Amount"
                     className="w-[15rem] h-[3rem] bg-slate-200 focus:outline-0 px-2"
                     value={amount}
                     onChange={(e) => setAmount(e.target.value)}
                     />
                </div>

                <div className="form-group">
                    <label className="font-medium text-darkBlue text-lg">First Name</label><br />
                    <input type="text" 
                    placeholder="Enter FirstName"
                    className="w-[15rem] h-[3rem] bg-slate-200 focus:outline-0 px-2"
                    id="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                     />
                </div>

                <div className="form-group">
                    <label className="font-medium text-darkBlue text-lg">Last Name</label> <br />
                    <input type="text" 
                    placeholder="Enter LastName"
                    className="w-[15rem] h-[3rem] bg-slate-200 focus:outline-0 px-2"
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                     />
                </div>

               <div className="my-2">
               <button type="submit" className="w-[9rem] h-[2rem] text-white bg-darkBlue hover:bg-brightRed mt-3 md:lg:mt-3" onClick={paywithpaystack}>Pay</button>
               </div>
            </form>
        </div>
    )
}

export default PaystackIntegration;