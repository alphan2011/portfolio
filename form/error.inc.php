<style type="text/css">
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  article, aside, details, figcaption, figure, footer, header, main, nav, section, summary {
      display:block;
  }

  body {
    font-family: "Open Sans", sans-serif;
  }

  h2 {
    color: #2c2c2c;
    margin-top: 5rem;
  }

  p {
    color: #2c2c2c;
    margin: 1rem 0 2rem 0;
  }

  a {
    background-color: #f58f7c;
    color: #ffffff;
    padding: 1rem 1.2rem;
  }

  a:hover {
    background-color: #f37862;
  }
</style>


<!-- Main content -->
<main class="default">
  <h1>Missing fields</h1>
  <p>Sorry, you have not completed all of the required fields.</p>
  <p>Please hit <a href="#" onClick="history.go(-1)">back</a> and complete the following required fields.</p>

  <ul>
  <?php
    for($i=0; $i<count($this->missing_required_fields); $i++){
      echo "<li>" . $this->missing_required_fields[$i]['title'] . "</li>\n";
    }
  ?>
  </ul>

  <p><strong><a href="#" onClick="history.go(-1)">Back to form</a></strong></p>

  <a href="http://anhthuphan.com/portfolio/index.html">back to portfolio</a>
</main>
