import React from 'react'
import Content from '../../components/Content'
import ContentHeader from '../../components/ContentHeader'

export default class Home extends React.Component {
    render() {
      return (
        <div>
          <ContentHeader title="Home Page" subtitle="test home page" />
          <Content>
            <div className="row">
              <div className="col-md-12">
                <div className="box">
                  <div className="box-header with-border">
                    <h3 className="box-title">Sample table</h3>
                  </div>
                  <div className="box-body no-padding">
                    <table className="table">
                    <tbody>
                      <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Label</th>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Update software</td>
                        <td><span className="badge bg-red">55%</span></td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Clean database</td>
                        <td><span className="badge bg-yellow">70%</span></td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td><span className="badge bg-light-blue">30%</span></td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td><span className="badge bg-green">90%</span></td>
                      </tr>
                    </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="page-header">Alerts and Callouts</h2>

            <div className="row">
              <div className="col-md-6">
                <div className="box box-default">
                  <div className="box-header with-border">
                    <i className="fa fa-warning"></i>

                    <h3 className="box-title">Alerts</h3>
                  </div>
                  <div className="box-body">
                    <div className="alert alert-danger alert-dismissible">
                      <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      <h4><i className="icon fa fa-ban"></i> Alert!</h4>
                      Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy with my whole heart.
                    </div>
                    <div className="alert alert-info alert-dismissible">
                      <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      <h4><i className="icon fa fa-info"></i> Alert!</h4>
                      Info alert preview. This alert is dismissable.
                    </div>
                    <div className="alert alert-warning alert-dismissible">
                      <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      <h4><i className="icon fa fa-warning"></i> Alert!</h4>
                      Warning alert preview. This alert is dismissable.
                    </div>
                    <div className="alert alert-success alert-dismissible">
                      <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      <h4><i className="icon fa fa-check"></i> Alert!</h4>
                      Success alert preview. This alert is dismissable.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="box box-default">
                  <div className="box-header with-border">
                    <i className="fa fa-bullhorn"></i>

                    <h3 className="box-title">Callouts</h3>
                  </div>
                  <div className="box-body">
                    <div className="callout callout-danger">
                      <h4>I am a danger callout!</h4>

                      <p>There is a problem that we need to fix. A wonderful serenity has taken possession of my entire soul,
                        like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
                    <div className="callout callout-info">
                      <h4>I am an info callout!</h4>

                      <p>Follow the steps to continue to payment.</p>
                    </div>
                    <div className="callout callout-warning">
                      <h4>I am a warning callout!</h4>

                      <p>This is a yellow callout.</p>
                    </div>
                    <div className="callout callout-success">
                      <h4>I am a success callout!</h4>

                      <p>This is a green callout.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </div>
      )
    }
}
