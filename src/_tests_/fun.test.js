import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import Foo from '../Foo';

//enzyme/jest

Enzyme.configure({ adapter: new Adapter() });

describe('A suite', function () {
  it('should render without throwing an error', function () {
    expect(
      shallow(<Foo />).contains(
        <>
          <div className='foo'>Bar</div>;<div className='foo'>Bar</div>;
        </>
      )
    ).toBe(true);
  });

  it('should mount in a full DOM', function () {
    expect(mount(<Foo />).find('.foo').length).toBe(2);
  });

  it('should render to static HTML', function () {
    expect(render(<Foo />).text()).toEqual('Bar;Bar;');
  });
});
