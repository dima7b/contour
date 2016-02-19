<?php include 'assets/html/components/snippet-head.php' ?>
<?php include 'assets/html/components/navbar-materials.php' ?>

  <div class="container">
    <div class="collection-wrapper">
      <p class="sub-title hidden"><strong>6010 Round</strong></p>
      <p class="sub-title-two hidden"><strong>Balusters</strong></p>
      <p class="sub-title-three hidden"><strong>5015-36-O</strong></p>
      <ul class="collection parent-collection z-depth-1">

        <li id="mItem1" class="collection-item cte empty">
          <div class="row main-collection">
            <div class="col s7">
              <?php include 'assets/html/components/snippet-textinput.php' ?>
            </div>
            <div class="col s5 right-align tap-done">
              <p class="being-typed done">Tap enter when <span>DONE</span></p>
              <p class="being-details"><a href="#">+ details</a></p>
            </div>
          </div>

          <div class="hidden-collection">
            <div class="row row-header">
              <div class="col s7">
                <a class="close" href="#"><i class="material-icons">close</i></a>
              </div>
              <div class="col s5 right-align">
                <a href="#"><i class="material-icons">insert_link</i></a>
                <a href="#"><i class="material-icons">done</i></a>
              </div>
            </div>

            <div class="row no-padding">
              <ul class="collection sub-details">
                <li>
                  <div class="row">
                    <div class="col s4">
                      <p class="gray">Measured in:</p>
                    </div>
                    <div class="col s3"><p class="unit">Measured in:</p></div>
                    <div class="col s3"><p class="unit">Measured in:</p></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li id="zItem1" class="collection-item empty cte new-entry hidden">
          <div class="row main-collection-two">
            <div class="col s7">
              <textarea name="enter_type" placeholder="Start typing or tap to add Material Category" rows="10" cols="15"></textarea>
            </div>
            <div class="col s5 right-align tap-done">
              <p class="being-typed done">Tap enter when <span>DONE</span></p>
              <p class="being-details"><a href="#">+[details sheet]</a></p>
            </div>
          </div>

          <div class="sub-hidden-collection">
            <div class="row row-header">
              <div class="col s7">
                <a class="close" href="#"><i class="material-icons">close</i></a>
              </div>
              <div class="col s5 right-align">
                <a href="#"><i class="material-icons">insert_link</i></a>
                <a href="#"><i class="material-icons">done</i></a>
              </div>
            </div>

            <div class="row no-padding">
              <ul class="collection sub-details">
                <li class="details">
                  <div class="row">
                    <div class="col s4">
                      <p class="gray">Broken down as:</p>
                    </div>
                    <div class="col s3"><p class="unit link-exact">Exact Amounts</p></div>
                    <div class="col s3"><p class="unit link-fractions">Fractions</p></div>
                  </div>
                </li>
                <li class="details">
                  <div class="row">
                    <div class="col s4">
                      <p class="gray">Measured by::</p>
                    </div>
                    <div class="col s8">
                      <p class="unit">Feet</p>
                      <p class="unit">Meters</p>
                      <p class="unit">Pounds</p>
                      <p class="unit">Gallons</p>
                      <p class="unit">Cups</p>
                      <p class="unit">Qty</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="sub-hidden-row">
            <div class="row row-header">
              <div class="col s7">
                <a class="close-exact" href="#"><i class="material-icons">close</i></a>
              </div>
              <div class="col s5 right-align">
                <a href="#"><i class="material-icons">insert_link</i></a>
                <a href="#"><i class="material-icons">done</i></a>
              </div>
            </div>
            <div class="row">
              <div class="details col s12">
                <div class="row">
                  <div class="col s4">
                    <p class="gray">Broken down as:</p>
                  </div>
                  <div class="col s8">
                    <p>Exact Amounts</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row bg-gray">
              <div class="details col s12">
                <div class="row">
                  <div class="col s4">
                    <p class="gray">Measured by:</p>
                  </div>
                  <div class="col s8">
                    <p class="unit">Feet</p>
                    <p class="unit">Meters</p>
                    <p class="unit">Pounds</p>
                    <p class="unit">Gallons</p>
                    <p class="unit">Cups</p>
                    <p class="unit">Qty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sub-hidden-row-fractions">
            <div class="row row-header">
              <div class="col s7">
                <a class="close-fractions" href="#"><i class="material-icons">close</i></a>
              </div>
              <div class="col s5 right-align">
                <a href="#"><i class="material-icons">insert_link</i></a>
                <a href="#"><i class="material-icons">done</i></a>
              </div>
            </div>
            <div class="row">
              <div class="details col s12">
                <div class="row">
                  <div class="col s3">
                    <p class="gray">Broken down as:</p>
                  </div>
                  <div class="col s4">
                    <p>Fractions</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="details col s12">
                <div class="row">
                  <div class="col s3">
                    <p class="gray">Measured by:</p>
                  </div>
                  <div class="col s4">
                    <p>Feet</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row bg-gray details">
              <div class="col s4">
                <p class="gray">Fractions of:</p>
              </div>
              <div class="col s6 left-align">
                <p class="unit">1</p>
                <p class="unit">1/2</p>
                <p class="unit">1/4</p>
                <p class="unit">1/10</p>
                <p class="unit">1/12</p>
              </div>
            </div>

            <div class="row bg-gray details">
              <div class="col s6">
                <p class="gray">Maximum measurement of</p>
              </div>
              <div class="col s6 left-align">
                <p class="gray">ft</p>
              </div>
            </div>

            <div class="row bg-gray details">
              <div class="col s6">
                <p class="gray">Minimum measurement of</p>
              </div>
              <div class="col s6 left-align">
                <p class="gray">ft</p>
              </div>
            </div>

          </div>

        </li>

      </ul>
    </div>
  </div>


<?php include 'assets/html/components/snippet-bottom.php' ?>