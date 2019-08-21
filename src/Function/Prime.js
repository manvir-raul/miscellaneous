import React,{Component} from 'react';

class Prime extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value:null,
            message:""
        }
    }

    onChange=(e)=>{
        this.setState({
            value:e.target.value,
            message:""
            }
        );
    }

    prime=(e)=>{
        e.preventDefault();
        let num = this.state.value;
        if(num<2){
            this.setState({message:"not prime number"});
            return
        } else if (num === 2){
            this.setState({message:" is Prime number"});
            return
        }
        let divider=2;
        while(num % divider !== 0){
            if(num - divider++ === 1){
                this.setState({message:"is Prime number"})
                return
            }
            else {
                console.log("continue")
                continue
            } 
        }
        this.setState({message:"is not a  Prime Number"})
        return
    }


    render() { 
        return ( 
            <div>
                <form onSubmit={this.prime}>
                    <input 
                        type="number" 
                        value={this.state.value} 
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                    />
                </form>
            
                {this.state.message!=="" &&<p>{this.state.value}  {this.state.message}</p>}
               
            </div>
         );
    }
}
 
export default Prime;