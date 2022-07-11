import { Col, Container, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import SimpleButton, { BUTTON_TYPE } from '../../components/SimpleButton';
import type { StoreState } from '../../store';
import { EMPTY_ISSUE, REQUEST_STATUS } from '../../types';
import { setIssueFormElement, submitIssueForm, toggleIssueFormIsOpen } from './issueFormActions';
import type { IssueFormProps } from './types';

export const IssueFormContainer: React.FC<IssueFormProps> = ({
  toggleSibebarOpen,
  issue: { title, description } = EMPTY_ISSUE,
  handleIssueElementChange,
  handleSubmit,
  requestStatus,
  requestError,
}) => (
  <Container
    fluid
    style={{
      zIndex: 1,
      position: 'fixed',
      top: 0,
      left: 0,
      background: '#FFFFFF99',
      width: '100vw',
      height: '100vh',
    }}
  >
    {requestStatus === REQUEST_STATUS.PENDING && <Loader />}
    <Row className="justify-content-center h-100">
      <Col xs={12} md={8} lg={5} className="align-self-center">
        <Form style={{ background: '#FFFFFF' }} className="shadow-lg my-4 p-4 rounded">
          <Form.Group controlId="formIssueTitle" className="my-4">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="Enter title"
              value={title}
              onChange={(event: any) =>
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                handleIssueElementChange('title', (event.target.value as string) || '')
              }
            />
          </Form.Group>
          <Form.Group controlId="formIssueDescription" className="my-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Enter description"
              value={description}
              onChange={(event: any) =>
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                handleIssueElementChange('description', (event.target.value as string) || '')
              }
            />
          </Form.Group>
          {requestError && (
            <Form.Text className="text-danger">
              <small>{requestError.message}</small>
            </Form.Text>
          )}

          <div className="d-flex mt-5 justify-content-center">
            <SimpleButton
              type={BUTTON_TYPE.SUBMIT}
              onClick={() => handleSubmit()}
              materialIconName="save"
            />
            <SimpleButton onClick={toggleSibebarOpen} materialIconName="close" />
          </div>
        </Form>
      </Col>
    </Row>
  </Container>
);

const mapStateToProps = ({ issueForm }: StoreState) => issueForm;

const mapDispatchToProps = {
  toggleSibebarOpen: toggleIssueFormIsOpen,
  handleIssueElementChange: setIssueFormElement,
  handleSubmit: submitIssueForm,
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(IssueFormContainer);
