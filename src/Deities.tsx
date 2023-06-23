import { Typography, Avatar } from 'antd';
import {
  CrownTwoTone, // Fundamental
  BookTwoTone, //Knowledge
  HeartTwoTone, //Life
  FireTwoTone, //Light
  UsbTwoTone, //Death
  TrophyTwoTone, // Tempest
  EyeInvisibleTwoTone, // Trickery
  PictureTwoTone, // Nature
  FlagTwoTone// War

} from '@ant-design/icons';

const { Title } = Typography;

function GetDomainObject(name) {
  switch (name) {
    case "War":
      return (<FlagTwoTone className='py-2 text-2xl' twoToneColor="#eb2f00" />);
    case "Nature":
      return (<PictureTwoTone className='py-2 text-2xl' twoToneColor="#eb0096" />);
    case "Trickery":
      return (<EyeInvisibleTwoTone className='py-2 text-2xl' twoToneColor="#0b2f96" />);
    case "Fundamental":
      return (<CrownTwoTone className='py-2 text-2xl' twoToneColor="#333333" />);
    case "Knowledge":
      return (<BookTwoTone className='py-2 text-2xl' twoToneColor="#bb362f" />);
    case "Tempest":
      return (<TrophyTwoTone className='py-2 text-2xl' twoToneColor="#aaaa00" />);
    case "Life":
      return (<HeartTwoTone className='py-2 text-2xl' twoToneColor="#eb2f96" />);
    case "Light":
      return (<FireTwoTone className='py-2 text-2xl' twoToneColor="#eb2f42" />);
    case "Death":
      return (<UsbTwoTone className='py-2 text-2xl' twoToneColor="#424242" />);
    default:
      return ("Error")
  }
}

function GetDomains(data){
  var data = (data.split(", "));
  var result = []
  for (let i = 0; i < data.length; i++) {
    result.push(GetDomainObject(data[i]))
  }
  return (result)
}

export default function Deity({ imageSrc, descriptionProps }) {
  return (
    <div className='inline-flex w-full py-4'>
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        src={imageSrc}
        alt={descriptionProps.title}
      />
      <div className='px-4 w-[90%]'>
        <Title>{descriptionProps.title}</Title>
        <p>{descriptionProps.body}</p>
      </div>
      <i className='px-4 w-[5%]'>{GetDomains(descriptionProps.domain)}</i>
    </div>
  );
}