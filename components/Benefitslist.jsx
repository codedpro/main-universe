import styles from "../styles";

const Benefitslist = ({ texts }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className="flex items-center">
      <div
        className={`${styles.flexCenter} w-[20px] h-[20px] rounded-full bg-[#323F5D] flex items-center`}
      >
        <div className="w-[10px] h-[10px] rounded-full bg-white" />
      </div>
      <p className="ml-2 text-sm font-semibold text-white">{texts}</p>
    </div>
  </div>
);

export default Benefitslist;
