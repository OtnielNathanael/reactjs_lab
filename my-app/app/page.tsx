import Image from "next/image";

import {Stack,Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <h1 style={{fontSize :"24px", color: "blue"}}>Home Movie List</h1>
      <h2 style={{fontSize :"20px", color: "green"}}>Faqih Matuz Sahro</h2>
      <h3 style={{fontSize :"18px", color: "red"}}>Kelas Pemrograman Web 2024</h3>
      
      <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>;

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
    </div>
  )
}