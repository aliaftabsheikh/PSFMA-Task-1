import SocialWalletButton from "@/components/SocialWalletButton";
import React from "react";

function Page() {
  const bio =[
    {
      name: "Ali Aftab Sheikh",
      city: "Karachi",
      projectName: "Social Wallet"
    }
  ]
  return (
    <div className="flex items-center justify-center flex-col mt-20">
      {
        bio.map((item, index)=>(
          <div key={index}>
            <div className="flex gap-6 text-2xl sm:text-lg sm:flex-col sm:gap-2 font-semibold text-gray-300 text-center">
              <p>
              {item.name}
              </p>


              <p>
              {item.city}

              </p>
            </div>

            <p className="text-5xl sm:text-2xl font-semibold text-gray-300 text-center my-8">{item.projectName}</p>
          </div>
        ))
      }
      <SocialWalletButton />
    </div>
  );
}

export default Page;
