import { MoonLoader } from "react-spinners";

const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height: '90vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <MoonLoader/>
    </div>
  );
};

export default LoaderComponent;
