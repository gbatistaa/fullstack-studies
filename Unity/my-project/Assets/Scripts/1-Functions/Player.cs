using Unity.VisualScripting;
using UnityEngine;

public class Player : MonoBehaviour
{
    public string playerName = "Gabriel the pro player";
    public int age = 25;
    public int characterLevel = 80;
    public int currentHp = 100;
    public float moveSpeed = 2.5f;
    public bool gameOver = true;
    public Rigidbody2D rb;

    private void DisplayPlayerInfo() {
        Debug.Log("The player name is: " + playerName);
        Debug.Log("The player age is: " + age);
        Debug.Log("The player level is: " + characterLevel);
    } 

    private void TakeDamage(int damage) {
        currentHp -= damage;
    }

    private void Awake() {
    }

    private void Start()
    {
      TakeDamage(25);
    }

    private void Update() {
        
    }

}
