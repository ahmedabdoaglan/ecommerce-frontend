import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Heading } from "@components/common";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Ahmed Ali",
      role: "Frontend Developer",
      description: "Passionate about creating beautiful user experiences",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Mohamed Hassan",
      role: "Backend Developer",
      description: "Expert in server-side development and APIs",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Omar Mahmoud",
      role: "Full Stack Developer",
      description: "Bridging frontend and backend technologies",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Quality First",
      description:
        "We never compromise on the quality of our products and services",
    },
    {
      icon: "🤝",
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do",
    },
    {
      icon: "⚡",
      title: "Innovation",
      description:
        "We constantly innovate to provide better shopping experiences",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description:
        "We care about our environment and promote sustainable practices",
    },
  ];

  const stats = [
    { number: "1000+", label: "Products" },
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Brands" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className={styles.heroContent}>
                <Heading title="About Our eCom" />
                <p className={styles.heroDescription}>
                  We are a modern e-commerce platform dedicated to providing
                  high-quality products across multiple categories. Our mission
                  is to make online shopping simple, secure, and enjoyable for
                  everyone.
                </p>
                <div className={styles.heroStats}>
                  {stats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                      <div className={styles.statNumber}>{stat.number}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.heroImage}>
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=center"
                  alt="About Us"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <Heading title="Our Story" />
              <p className={styles.storyText}>
                Founded in 2025, Our eCom started as a small project with a big
                dream: to create an online marketplace that truly cares about
                its customers. What began as a simple idea has grown into a
                comprehensive platform serving customers across multiple product
                categories.
              </p>
              <p className={styles.storyText}>
                We believe that shopping should be more than just a transaction
                - it should be an experience. That's why we've built our
                platform with modern technologies like React, TypeScript, and
                Redux to ensure fast, reliable, and secure shopping for all our
                users.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <Container>
          <div className="text-center mb-5">
            <Heading title="Our Values" />
            <p className="text-muted">
              The principles that guide everything we do
            </p>
          </div>
          <Row>
            {values.map((value, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className={styles.valueCard}>
                  <Card.Body className="text-center">
                    <div className={styles.valueIcon}>{value.icon}</div>
                    <Card.Title className={styles.valueTitle}>
                      {value.title}
                    </Card.Title>
                    <Card.Text className={styles.valueDescription}>
                      {value.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <Container>
          <div className="text-center mb-5">
            <Heading title="Meet Our Team" />
            <p className="text-muted">The talented people behind Our eCom</p>
          </div>
          <Row>
            {teamMembers.map((member, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className={styles.teamCard}>
                  <div className={styles.teamImageWrapper}>
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className={styles.teamImage}
                    />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className={styles.teamName}>
                      {member.name}
                    </Card.Title>
                    <Badge bg="info" className={styles.teamRole}>
                      {member.role}
                    </Badge>
                    <Card.Text className={styles.teamDescription}>
                      {member.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Technology Section */}
      <section className={styles.techSection}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <Heading title="Built with Modern Technology" />
              <p className={styles.techDescription}>
                Our platform is built using cutting-edge technologies to ensure
                the best performance, security, and user experience.
              </p>
              <div className={styles.techStack}>
                <Badge bg="primary" className={styles.techBadge}>
                  React
                </Badge>
                <Badge bg="success" className={styles.techBadge}>
                  TypeScript
                </Badge>
                <Badge bg="warning" className={styles.techBadge}>
                  Redux Toolkit
                </Badge>
                <Badge bg="info" className={styles.techBadge}>
                  Bootstrap
                </Badge>
                <Badge bg="secondary" className={styles.techBadge}>
                  Axios
                </Badge>
                <Badge bg="danger" className={styles.techBadge}>
                  React Router
                </Badge>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className={styles.contactSection}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className={styles.contactContent}>
                <h2 className={styles.contactTitle}>Ready to Get Started?</h2>
                <p className={styles.contactDescription}>
                  Join our community of satisfied customers and experience the
                  future of online shopping.
                </p>
                <div className={styles.contactInfo}>
                  <p className="mb-1">
                    <strong>Email:</strong> contact@ourecom.com
                  </p>
                  <p className="mb-1">
                    <strong>Phone:</strong> +20 123 456 789
                  </p>
                  <p className="mb-0">
                    <strong>Address:</strong> Cairo, Egypt
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
