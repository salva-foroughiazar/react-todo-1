export default function Actions() {
    return(
        <div>
            <button id="rmv-btn">Delete</button>
            
            <input type="text" placeholder="Search..." id="search-input"/>
            
            <label for="statusSelect">Status:</label>
            <select id="statusSelect">
                <option value="all">All</option>
                <option value="done">Done</option>
                <option value="todo">ToDo</option>
            </select>
        </div>
    );
}