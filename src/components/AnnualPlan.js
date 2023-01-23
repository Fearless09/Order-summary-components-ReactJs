import IconMusic from '../images/icon-music.svg'

const AnnualPlan = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <img src={IconMusic} alt="" />
                <div className='ms-4'>
                    <h4 className='m-0'>Annual Plan</h4>
                    <p className='lead m-0'>$59.99/year</p>
                </div>
            </div>
        </div>
    );
}

export default AnnualPlan;
