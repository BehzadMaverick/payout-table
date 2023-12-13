import Container from "layouts/Container";
import Body from "layouts/Body";
import Subheading from "components/Subheading";
import Title from "components/Title";
import PayoutHistory from "components/Tables/PayoutHistory";

const Payouts = () => {
  return (
    <Container>
      <Title>Payouts</Title>
      <Body>
        <Subheading text="Payout History" />
        <PayoutHistory />
      </Body>
    </Container>
  );
};

export default Payouts;
