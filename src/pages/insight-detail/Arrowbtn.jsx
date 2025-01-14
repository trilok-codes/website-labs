import LeftArrow from '../../assets/icons/arrow-left.svg';
import RightArrow from '../../assets/icons/arrow-right.svg';
function Arrowbtn() {
    return (
        <div>
            <div className="flex items-center md:gap-5 gap-2">
                <div className="flex-1 h-px opacity-70" />
                <div className="w-full h-px opacity-70 bg-gray-475"></div>
                <button
                    className="flex justify-center items-center cursor-pointer rounded-full border-none bg-white w-16 h-16"
                    type="button">
                    <img src={LeftArrow} alt="Left Arrow" className="w-16 h-16" />
                </button>
                <button
                    className="w-16 h-16 rounded-full border-none  flex items-center justify-center align-middle"
                    type="button">
                    <img src={RightArrow} alt="Right Arrow" className="text-center " />
                </button>
            </div>
        </div>
    );
}

export default Arrowbtn;
