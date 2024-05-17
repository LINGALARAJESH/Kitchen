import Card from 'react-bootstrap/Card';
import "./Cardsstarters.css"
import CardGroup from 'react-bootstrap/CardGroup';
import CB from "../../Assets/images/Nonveg/Starters/kebab.jpeg"
import MB from "../../Assets/images/Nonveg/Starters/lollipops.jpeg"
import CMB from "../../Assets/images/Nonveg/Starters/Magistics.jpeg"
import MMB from "../../Assets/images/Nonveg/Starters/tikka.jpeg"


function GroupExample() {
  return (
    <div id="imgha" className='container-fluid'>
    <CardGroup>
      <Card id="simg" >
        <Card.Img id="imga"  variant="top" src={CB} />
        <Card.Body>
          <Card.Title>Chicken Kebab</Card.Title>
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
          <Card.Title>Chicken Lollipops</Card.Title>
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
          <Card.Title>Chicken Magistics</Card.Title>
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
          <Card.Title>Chicken Tikka</Card.Title>
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