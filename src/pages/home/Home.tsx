import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Heading } from "@components/common";
import styles from "./Home.module.css";

const Home = () => {
  const categories = [
    {
      title: "Men's Collection",
      description: "Discover our latest men's fashion",
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&h=400&fit=crop&crop=center",
      prefix: "men",
      color: "primary",
    },
    {
      title: "Women's Collection",
      description: "Elegant styles for every occasion",
      img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop&crop=center",
      prefix: "women",
      color: "danger",
    },
    {
      title: "Kids Collection",
      description: "Fun and comfortable for little ones",
      img: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=600&h=400&fit=crop&crop=center",
      prefix: "kids",
      color: "warning",
    },
    {
      title: "Baby Collection",
      description: "Adorable outfits for your little angels",
      img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop&crop=center",
      prefix: "baby",
      color: "info",
    },
    {
      title: "Sports Collection",
      description: "Gear up for your active lifestyle",
      img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=400&fit=crop&crop=center",
      prefix: "sport",
      color: "success",
    },
  ];

  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Quick and reliable shipping to your doorstep",
    },
    {
      icon: "💳",
      title: "Secure Payment",
      description: "Safe and encrypted payment processing",
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      description: "Hassle-free return policy within 30 days",
    },
    {
      icon: "👥",
      title: "24/7 Support",
      description: "Customer support available around the clock",
    },
  ];

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={6}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                  Welcome to <span className="text-info">Our eCom</span>
                </h1>
                <p className={styles.heroDescription}>
                  Discover amazing products across multiple categories. From
                  fashion to sports gear, we have everything you need at
                  unbeatable prices.
                </p>
                <div className={styles.heroButtons}>
                  <Button
                    as={Link}
                    to="/categories"
                    variant="info"
                    size="lg"
                    className="me-3"
                    style={{ color: "white" }}
                  >
                    Shop Now
                  </Button>
                  <Button
                    as={Link}
                    to="/about-us"
                    variant="outline-secondary"
                    size="lg"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.heroImage}>
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center"
                  alt="Shopping"
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories Section */}
      <section className={styles.categoriesSection}>
        <Container>
          <div className="text-center mb-5">
            <Heading title="Shop by Category" />
            <p className="text-muted">
              Browse our wide range of products across different categories
            </p>
          </div>
          <Row>
            {categories.map((category, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className={styles.categoryCard}>
                  <div className={styles.categoryImageWrapper}>
                    <Card.Img
                      variant="top"
                      src={category.img}
                      className={styles.categoryImage}
                    />
                    <div className={styles.categoryOverlay}>
                      <Button
                        as={Link}
                        to={`/categories/products/${category.prefix}`}
                        variant={category.color}
                        size="sm"
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className={styles.categoryTitle}>
                      {category.title}
                    </Card.Title>
                    <Card.Text className="text-muted small">
                      {category.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <Container>
          <div className="text-center mb-5">
            <Heading title="Why Choose Us?" />
            <p className="text-muted">
              We provide the best shopping experience for our customers
            </p>
          </div>
          <Row>
            {features.map((feature, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h5 className={styles.featureTitle}>{feature.title}</h5>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>Ready to Start Shopping?</h2>
                <p className={styles.ctaDescription}>
                  Join thousands of satisfied customers and discover amazing
                  deals on quality products.
                </p>
                <div className={styles.ctaStats}>
                  <div className={styles.statItem}>
                    <Badge bg="info" className="fs-6 me-3">
                      1000+ Products
                    </Badge>
                    <Badge bg="success" className="fs-6 me-3">
                      500+ Happy Customers
                    </Badge>
                    <Badge bg="warning" className="fs-6">
                      Fast Delivery
                    </Badge>
                  </div>
                </div>
                <Button
                  as={Link}
                  to="/categories"
                  variant="info"
                  size="lg"
                  className="mt-3"
                  style={{ color: "white" }}
                >
                  Start Shopping Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
