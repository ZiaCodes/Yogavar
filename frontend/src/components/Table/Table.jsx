import React from 'react'

const Table = () => {
  return (
    <div className="wrapper">
        <table>

            <tr>
                <th>Plus applicable tax</th>
                <th>12 months of membership for the price of 9</th>
                <th>Free digital practice journal to inspire your growth</th>
                <th>Cancel anytime</th>
                <th>Unlimited access to 3000+ on demand yoga practices from 700 top teachers</th>
                <th>Unlimited access to 700+ audio and video meditations</th>
                <th>Unlimited access to 2700+ articles, podcasts and resources to expand your knowledge</th>
                <th>Unlimited access to 300+ courses and challenges to help your journey</th>
                <th>Discount on select trainings</th>
            </tr>

            <tr className='monthly'>
                <td className='price' >$19.99</td>
                <td data-cell="Plus applicable tax"></td>
                <td style={{textDecoration:"line-through solid 2px red"}} data-cell="12 months of membership for the price of 9"></td>
                <td style={{textDecoration:"line-through solid 2px red"}} data-cell="Free digital practice journal to inspire your growth"></td>
                <td style={{textDecoration:"line-through solid 2px red"}} data-cell="Cancel anytime"></td>
                <td data-cell="Unlimited access to 3000+ on demand yoga practices from 700 top teachers"></td>
                <td data-cell="Unlimited access to 700+ audio and video meditations"></td>
                <td data-cell="Unlimited access to 2700+ articles, podcasts and resources to expand your knowledge"></td>
                <td data-cell="Unlimited access to 300+ courses and challenges to help your journey"></td>
                <td data-cell="Discount ">10%</td>
            </tr>

            <tr className='Annually'>
                <td className='price' >$169.99</td>
                <td data-cell="Plus applicable tax"></td>
                <td data-cell="12 months of membership for the price of 9"></td>
                <td data-cell="Free digital practice journal to inspire your growth"></td>
                <td data-cell="Cancel anytime"></td>
                <td data-cell="Unlimited access to 3000+ on demand yoga practices from 700 top teachers"></td>
                <td data-cell="Unlimited access to 700+ audio and video meditations"></td>
                <td data-cell="Unlimited access to 2700+ articles, podcasts and resources to expand your knowledge"></td>
                <td data-cell="Unlimited access to 300+ courses and challenges to help your journey"></td>
                <td data-cell="Discount ">20%</td>
            </tr>



        </table>

    </div>
  )
}

export default Table