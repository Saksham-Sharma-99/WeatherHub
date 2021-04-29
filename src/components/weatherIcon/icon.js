import React from "react"
import { Constants } from "../../Model/Constants"
import {IoSunnySharp} from "react-icons/io5"
import {FaCloudSun , FaCloudSunRain} from "react-icons/fa"
import {IoMdRainy , IoMdSnow} from "react-icons/io"
import {AiFillCloud} from "react-icons/ai"
import {RiThunderstormsFill , RiMistLine} from "react-icons/ri"

function Icon(props){
    if (props.des == Constants.Clear_Sky) return  <IoSunnySharp />
    else if (props.des == Constants.Few_Clouds) return <FaCloudSun />
    else if(props.des == Constants.Scattered_Clouds || props.des==Constants.Broken_Clouds) return <AiFillCloud />
    else if(props.des == Constants.Rain) return <FaCloudSunRain />
    else if(props.des == Constants.Shower_Rain || props.des.includes("rain")) return <IoMdRainy />
    else if(props.des == Constants.Thunderstorm) return <RiThunderstormsFill />
    else if (props.des == Constants.Snow) return <IoMdSnow />
    else if (props.des == Constants.Mist) return <RiMistLine />

    else return <IoSunnySharp />
}

export default Icon