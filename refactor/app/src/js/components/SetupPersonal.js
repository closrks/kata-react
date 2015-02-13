/** @jsx React.DOM */

var React = require('react');

var SetupPersonal = React.createClass({

	render: function() {
		return (
			<section id="page-content">
        {/*     <header>
    <a href="#" class="branding">FloQast</a>
        <nav class="timeline">
            <div class="line"><div class="line-progress progress-1"></div></div>
            <a routeUrl="" id="checkpoint1" class="point-passed sectionpoint checkpoint" data-htm="true" rel="tooltip" data-toggle="tooltip" title="<div><span>Current:</span> <span style='color:#85be3c'>Setup Your Information</span></div>"><span class="sprite icon-checkpoint-profile"></span></a>
            <a routeUrl="/setup-providers" id="checkpoint2" class="checkpoint" data-htm="true" rel="tooltip" data-toggle="tooltip" title="<div><span style='color:#85be3c'>Setup Storage</span></div>">&nbsp;</a>
            <a routeUrl="/setup-company" id="checkpoint3" class="checkpoint" data-htm="true" rel="tooltip" data-toggle="tooltip" title="<div><span style='color:#85be3c'>Setup Company Information</span></div>">&nbsp;</a>
            <a routeUrl="/setup-folders" id="checkpoint4" class="sectionpoint checkpoint" data-htm="true" rel="tooltip" data-toggle="tooltip" title="<div><span style='color:#85be3c'>Setup Folders</span></div>"><span class="sprite icon-checkpoint-folder"></span></a>
            <a routeUrl="/setup-procedures" id="checkpoint5" class="checkpoint" data-htm="true" rel="tooltip" data-toggle="tooltip" title="<div><span style='color:#85be3c'>Setup Procedures</span></div>">&nbsp;</a>
            <a routeUrl="/setup-accounts" id="checkpoint6" class="checkpoint" data-htm="true" rel="tooltip" data-toggle="tooltip" title="" data-original-title="<div><span style='color:#85be3c'>Setup Reconciliations</span></div>">&nbsp;</a>
            <a routeUrl="/setup-review" id="checkpoint7" class="sectionpoint checkpoint" data-htm="true" rel="tooltip" data-toggle="tooltip" title="<div><span style='color:#85be3c'>Setup Review</span></div>"><span class="sprite icon-checkpoint-card"></span></a>
        </nav>
    </header> */}
        <section className="main-wrap">
          <div className="content-head">
            <div className="head-figure"><span className="sprite header-figure-profile" /></div>
            <h1><span className="thin">Setup</span> Your Information</h1>
          </div>
          <div className="content-body pinfo-form form-horizontal">
            <h4 className="b-m-h">Welcome to FloQast!</h4>
            <span>We would like to learn more about you.</span>
            <div id="notices" />
            <div className="col-lg-12">
              <span id="setupProfileErrorMessage" style={{color: '#a94442'}} />
            </div>
            <div className="form-group">
              <div className="col-sm-4">
                <span className="inputLabel">First Name</span>
                <span className="glyphicon glyphicon-play labeled" />
                <input id="firstName" type="text" name="userName.first" className="form-control non-radius req-notif" placeholder />
              </div>
              <div className="col-sm-4">
                <span className="inputLabel">Last Name</span>
                <span className="glyphicon glyphicon-play labeled" />
                <input id="lastName" type="text" name="userName.last" className="form-control non-radius req-notif" placeholder />
              </div>
              <div className="col-sm-4">
                <span className="inputLabel">Initials</span>
                <span className="glyphicon glyphicon-play labeled" />
                <input type="text" id="initials" name="userName.initials" className="form-control non-radius req-notif" placeholder />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <span className="inputLabel">Email</span>
                <span className="glyphicon glyphicon-play labeled" />
                <input id="email" type="email" name="userEmail" className="form-control non-radius req-notif" placeholder />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-6">
                <span className="inputLabel">Password</span>
                <span className="glyphicon glyphicon-play labeled" />
                <input id="password" type="password" name="password" className="form-control non-radius req-notif" placeholder />
              </div>
              <div className="col-sm-6">
                <span className="inputLabel">Confirm Password</span>
                <span className="glyphicon glyphicon-play labeled" />
                <input id="passwordConfirm" type="password" name="password-check" className="form-control non-radius req-notif" placeholder />
              </div>
            </div>
            <p>&nbsp;</p>    
          </div>
          {/* <div class="content-body-well text-center">
            <div class="head-figure"><img class="avatar_img user-avatar-large" src="{{avatar}}"><span class="sprite header-figure-profile"></span></div>
            <p><a href="javascript:void(0);" id="avatarUpload_btn" class="upload-photo-btn"><span class="glyphicon glyphicon-plus"></span>&nbsp; Upload Photo</a></p>
            <p>Adding a photo will allow other users to quickly know if you are <br>online, have been assigned to or have approved a project.</p>
        </div> */}
          <div className="content-foot">
            <button type="submit" id="submit" className="btn fq-btn-success c-f-btn">Continue</button>
          </div>
        </section>
      </section>

		);
	}

});

module.exports = SetupPersonal;