import SvgProps from "@/app/components/SvgProps";

const Cross = (props: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m12 10.6 4.2-4.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L13.4 12l4.2 4.2c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L12 13.4l-4.2 4.2c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l4.2-4.2-4.3-4.2c-.3-.4-.3-1.1 0-1.5.4-.4 1-.4 1.4 0l4.3 4.3Z" />
  </svg>
);
export default Cross;
