using UnityEngine;

public class Example : MonoBehaviour
{
    private void Awake() {
        Debug.Log("Awake was called");
    }

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    // Usually used to set default value or initialize something:
    void Start() {
        Debug.Log("Start was called");
    }

    // Update is called once per frame
    // Continuous processing, for exemple checks on the input update;
    void Update() {
        Debug.Log("Update was called");
    }

    // Usually used for physics calculation or movemente calculation, something that has to be time fixed
    // 50 times per second
    private void FixedUpdate() {
        
    }
}
