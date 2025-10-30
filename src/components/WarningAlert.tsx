import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const WarningAlert = () => {
  return (
    <div className="container mx-auto px-4 -mb-24 -mt-20 relative z-10">
      <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-10 rounded-md shadow z-50">
        <div className="flex z-50">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-red-800">
              Warning: Risk of Unlimited Fines and up to 5 years in prison!
            </h3>
            <div className="mt-2 text-base text-red-700">
              <p>
                Hiring an unlicensed waste carrier puts you at serious risk.
                <br />
                <br />
                If your waste is fly-tipped,{" "}
                <strong>you can be fined an unlimited amount, or even recieve a 5 year prison sentence</strong>,
                even if you didn't dump it.
              </p>
              <p className="mt-3">
                <strong>Protect yourself:</strong> Always use a verified, licensed carrier. All providers
                listed in our directory are checked against the official Environment Agency register.
              </p>
              <p className="mt-3">
                <Link
                  to="/resources/fly-tipping-risks"
                  className="font-medium text-red-800 hover:text-red-900 underline"
                >
                  Learn more about the risks & your responsibilities →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningAlert;
