<?php include 'assets/html/components/snippet-head.php' ?>
<?php include 'assets/html/components/navbar-materials-main.php' ?>

  <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
    <a class="btn-floating btn-large red">
      <i class="large material-icons">add</i>
    </a>
    <ul>
      <li><a class="btn-floating yellow"><i class="material-icons">send</i></a><span>Invite Team</span></li>
      <li><a class="btn-floating green" href="materials-flow-1.php">[</a><span>New Material</span></li>
      <li><a class="btn-floating orange">/</a><span>New Product</span></li>
      <li><a class="btn-floating purple">#</a><span>New Order</span></li>
    </ul>
  </div>

  <div class="container">
    <div class="collection-wrapper">
      <p class="sub-title hidden"><strong>Stair Lumber</strong></p>
      <ul class="collection parent-collection z-depth-1">

        <li id="item1" class="collection-item cte fixed">
          <div class="row main-collection">
            <div class="col s7">
              <p>Stair Lumber <span class="gray" style="padding-left:30px;">5015-36-O, 5015-36-O</span></p>
            </div>
          </div>

          <ul class="collection z-depth-1 hidden-collection">
            <li class="collection-item typing non-cte">
              <div class="row">
                <div class="col s7">
                  <p>5015-36-O <span class="gray" style="padding-left:30px;">Exact Amounts, Quantity</span></p>
                </div>
                <div class="col s5 right-align">
                  <p class="being-typed">
                    <i class="material-icons">wallpaper</i>
                    <i class="material-icons">restore</i>
                    <i class="material-icons">create</i>
                  </p>
                </div>
              </div>
            </li>
            <li class="collection-item typing non-cte">
              <div class="row">
                <div class="col s7">
                  <p>5015-39-O</p>
                </div>
                <div class="col s5 right-align">
                  <p class="being-typed">+ details</p>
                </div>
              </div>
            </li>
            <li class="collection-item empty non-cte">
              <div class="row">
                <div class="col s7">
                  <?php include 'assets/html/components/snippet-textinput.php' ?>
                </div>
              </div>
            </li>
          </ul>

        </li>

        <li id="item2" class="collection-item cte">
          <div class="row">
            <div class="col s7">
              <p class="enter_type">Railings</p>
            </div>
          </div>
        </li>

        <li class="collection-item cte">
          <div class="row">
            <div class="col s7">
              <p class="enter_type">Fittings</p>
            </div>
          </div>
        </li>

        <li class="collection-item cte">
          <div class="row">
            <div class="col s7">
              <p class="enter_type">Balusters</p>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>

  <?php include 'assets/html/components/snippet-bottom.php' ?>

  </body>
</html>
