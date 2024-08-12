import { LazyLoadImage } from "react-lazy-load-image-component";
import LivingAni from "../../../TextEffectComponents/LivingAni/LivingAni";
import "./Member.css";

function Member() {
  return (
    <div className="px-3 lg:px-20">
      <div className="lg:h-[480px]  w-auto rounded-lg mx-auto">
        <LazyLoadImage
          effect="blur"
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "1s" },
          }}
          src="https://belfort.qodeinteractive.com/wp-content/uploads/2022/12/h5-img3.jpg"
        />
      </div>
      {/* <img
        src="https://belfort.qodeinteractive.com/wp-content/uploads/2022/12/h5-img3.jpg"
        alt="Team Member"
        className="lg:h-[480px]   w-auto rounded-lg mx-auto"
      /> */}
      <p className="text-center lg:text-xl lg:max-w-[665px] mx-auto lg:pt-10 lg:mt-[87px]">
        Meet our dedicated team member, who brings passion and expertise to
        every project.
      </p>
      <p className="my-4 font-semibold text-center lg:text-2xl">
        <LivingAni>
          <span className="text-4xl font-signature">John</span>
          <span className="text-4xl font-signature">Doe</span>
        </LivingAni>
      </p>
    </div>
  );
}

export default Member;
