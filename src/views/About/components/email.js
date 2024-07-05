import { Html } from "@react-email/html";

export function Email(props) {
  const { url } = props;

  return (
    <Html lang="en">
      <button href={url}>Click me</button>
    </Html>
  );
}
