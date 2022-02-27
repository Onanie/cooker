import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.testDb') 

 export const fetchData = () => {
    db.transaction(function (txn) {
        txn.executeSql(
          "SELECT * FROM table_recipe",
          [],
          function (tx, res) {
            console.log("item:", res.rows.length);
            if (res.rows.length == 0) {
              txn.executeSql("DROP TABLE IF EXISTS table_recipe", []);
              txn.executeSql(
                "CREATE TABLE IF NOT EXISTS table_recipe( id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(20), method VARCHAR(500), imageUri VARCHAR(255), userId INT(10))",
                []
              );
            }
          }
        );
      });
  }

  // event handler for new item creation
export const newItem = ({title,method,imageUri,userId}) => {
    db.transaction(function (tx) {
        console.log(tx);
        tx.executeSql(
          "INSERT INTO table_recipe (title, method, imageUri, userId) VALUES (?,?,?,?)",
          [title,method, imageUri, userId],
          (tx, results) => {
            console.log("Results", results.rowsAffected);
            if (results.rowsAffected > 0) {
             return "new recipe created succesfully"
            } else return "Creation Failed";
          }
        );
      });
    };
  

 export const Update = ({id, title,method,imageUri,userId}:any) => {
    db.transaction((tx) => {
        tx.executeSql(
          "UPDATE table_recipe set title=?, method=? , imageUri, userId=? where id=?",
          [title, method, imageUri, userId],
          (tx, results) => {
            console.log("Results", results.rowsAffected);
            if (results.rowsAffected > 0) {
              return  "Receipe updated successfully";
            } else return "Updation Failed";
          }
        );
      });
  }

 export const Delete = ({id}:any) => {
    db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM  table_recipe where id=?",
          [id],
          (tx, results) => {
            console.log("Results", results.rowsAffected);
            if (results.rowsAffected > 0) {
              return "Recipe deleted successfully";
               
            } else return "Failed to delete Recipe";
            
          }
        );
      });
  }