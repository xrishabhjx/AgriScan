import Disease from "../../assets/graphics/Disease.png";
import Alert from "../../assets/graphics/Alert.png";

export default function Features() {
  return (
    <section className="bg-primary-1500 overflow-hidden bg-[url('../src/assets/Noise.webp')] bg-repeat">
      <div className="text-primary-50 relative m-auto max-w-[90rem] px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <div className="bg-primary-1300 absolute top-[50%] left-[100%] h-[62.5rem] w-[62.5rem] -translate-[50%] rounded-full opacity-100 blur-[40rem] max-xl:h-[35rem] max-xl:w-[35rem] max-xl:blur-[10rem] max-lg:left-[90%] max-lg:h-[20rem] max-lg:w-[20rem]" />

        <h2 className="mb-28 text-center text-6xl/18 font-semibold tracking-tighter max-xl:mb-18 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter">
          All The Tools You Need to <br />
          <span className="text-primary-500 primary-glow">Diagnose & Protect </span>
          Your Crops
        </h2>
        <div className="mb-20 grid grid-cols-2 items-center gap-x-16 max-xl:mb-12 max-md:mb-16 max-md:grid-cols-1 max-md:gap-y-10">
          <figure>
            <img
              className="max-h-[44rem] max-md:max-w-[90%] max-md:justify-self-center rounded-3xl"
              src={Disease}
              alt="Smart Organization graphic"
            />
          </figure>
          <div className="z-1 max-w-lg justify-self-end max-md:row-start-1 max-md:max-w-max">
            <p className="mb-8 text-5xl/16 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-4xl/10 max-lg:mb-4 max-lg:text-3xl/12 max-lg:tracking-tighter max-sm:text-2xl/8 max-sm:tracking-tight">
              Intelligent Crop Diagnosis
            </p>
            <p className="text-primary-100 z-1 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose">
              Our AI-driven tool helps farmers detect crop diseases instantly from a photo, providing accurate diagnoses and actionable insights to protect yields.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center gap-x-16 max-md:grid-cols-1 max-md:gap-y-10">
          <div className="max-w-lg justify-self-start max-md:max-w-max">
            <p className="mb-8 text-5xl/16 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-4xl/10 max-lg:mb-4 max-lg:text-3xl/12 max-lg:tracking-tighter max-sm:text-2xl/8 max-sm:tracking-tight">
              Real-Time Alerts
            </p>
            <p className="text-primary-100 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose">
              Get instant alerts on crop health issues as soon as they are detected. Our AI analyzes plant images in real-time, providing timely insights and recommendations to help farmers take quick action and protect their yields.
            </p>
          </div>
          <figure className="z-1">
            <img
              className="max-h-[44rem] max-md:max-w-[90%] max-md:justify-self-center rounded-3xl"
              src={Alert}
              alt="Contextual Reminders graphic"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
