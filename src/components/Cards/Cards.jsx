import Card from 'react-bootstrap/Card';
import "./Cards.css"
import CardGroup from 'react-bootstrap/CardGroup';
import CB from "../../Assets/images/Nonveg/Biryani/chicken Biryani.jpg"
import MB from "../../Assets/images/Nonveg/Biryani/mutton biryani.jpg"
import CMB from "../../Assets/images/Nonveg/Biryani/mandi biryani"
import MMB from "../../Assets/images/Nonveg/Biryani/mutton mandi biryani.jpeg"


function GroupExample() {
  return (
    <div id="imgha" className='container-fluid'>
    <CardGroup >
      <Card id="simg"  >
        <Card.Img id="imga"  variant="top" src={CB} />
        <Card.Body>
          <Card.Title>Chicken Biryani</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            <br/>
            <br/>
            <button type="button" class="btn btn-success">AddTOCart</button>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card id="simg">
        <Card.Img id="imga"  variant="top" src={MB} />
        <Card.Body>
          <Card.Title>Mutton Biryani</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
            <br/>
            <br/>
            <button type="button" class="btn btn-success">AddTOCart</button>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card id="simg">
        <Card.Img id="imga" variant="top" src={CMB} />
        <Card.Body>
          <Card.Title>Chicken Mandi</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
            <br/>
            <br/>
            <button type="button" class="btn btn-success">AddTOCart</button>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card id="simg">
        <Card.Img id="imga" variant="top" src={MMB} />
        <Card.Body>
          <Card.Title>Mutton Mandi</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
            <br/>
            <br/>
            <button type="button" class="btn btn-success">AddTOCart</button>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    
    </CardGroup>
    </div>
  );
}

export default GroupExample;